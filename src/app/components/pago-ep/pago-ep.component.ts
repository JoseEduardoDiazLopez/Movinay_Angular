import { Component } from '@angular/core';
import { Citas } from 'src/app/models/citas';
import { Pago } from 'src/app/models/pago';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { PaymentService } from 'src/app/services/payment.service';
import { TramitesService } from 'src/app/services/tramites.service';
import { Tramites } from 'src/app/models/tramites';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-pago-ep',
  templateUrl: './pago-ep.component.html',
  styleUrls: ['./pago-ep.component.css','./pago-et.component.css','./pago-ee.component.css']
})
export class PagoEpComponent {
  currentUser: User | null = null;
  currentUserName: string = '';
  guardarUsuario : string = '';
  guardarId : number | undefined;
  tabsForm: FormGroup;
  id: string;
  listarCitas: Pago[] = [];
  tiposTramite: string[] = [];
  listarCostoTramites: Tramites[]=[];
  conceptoSeleccionado: string | null = null;
  EstadoPago: string = "Por confirmar.";
  constructor(private authService: AuthService,private router: Router, private fb : FormBuilder, private aRouter: ActivatedRoute
    , private paymentService: PaymentService, private tramiteService: TramitesService,private toastr: ToastrService){
    this.tabsForm = this.fb.group({
        idUsuario: [this.guardarId, Validators.required],
        TipoPago: ['', Validators.required],
        Concepto: ['', Validators.required],
        Cantidad: ['', Validators.required],
        numTarjeta: ['', Validators.required],
        nombreTarjeta: ['', Validators.required],
        FechaTarjeta: ['', Validators.required],
        CVV: ['', Validators.required]
    });
    this.id = this.aRouter.snapshot.paramMap.get('id')!;
  }
  ngOnInit() {
    this.authService.currentUser.subscribe((user: User | null) => {
      this.currentUser = user;
      this.currentUserName = user ? user.username : '';
      this.guardarUsuario= this.authService.usuarioCad
      this.guardarId = this.authService.getUserId();
    });
    this.tabsForm.get('idUsuario')?.setValue(this.guardarId);
    this.obtenerPago()
  }
    // Verifica si el usuario está logueado
    userIsLoggedIn(): boolean {
      return this.currentUser !== null; 
    }
    guardarUser() : string{
      return this.guardarUsuario
    }
    obtenerPago() {
      this.paymentService.getTiposTramite(this.guardarId!)
        .subscribe(
          tiposTramite => {
            this.tiposTramite = tiposTramite;
            console.log('Tipos de Trámite encontrados:', this.tiposTramite);
          },
          error => {
            console.error('Error al obtener tipos de trámite:', error);
          }
        );
    }
    obtenerCostoTramite(){
      this.tramiteService.getCostoTramite(this.conceptoSeleccionado!).subscribe((data: Tramites[]) => {
        console.log(data);
        this.listarCostoTramites = data;
      }, (error: any)=>{
        console.log(error);
      });
    }// obtener cita
    onConceptoSeleccionado() {
      this.conceptoSeleccionado = this.tabsForm.get('Concepto')?.value;
    
      this.tramiteService.getCostoTramite(this.conceptoSeleccionado!).subscribe(
        (data: Tramites) => {
          console.log(data);
          
          // Asegúrate de que el servicio realmente devuelve un objeto con el campo 'Costo'
          if (data && data.Costo) {
            // Establecer solo el valor 'Costo' en el campo 'Cantidad'
            this.tabsForm.get('Cantidad')?.setValue(data.Costo);
          } else {
            console.log('Error: No se encontró el costo del trámite.');
          }
        },
        (error: any) => {
          console.log(error);
        }
      );
    }
    onSubmit(){
      const Pagos : Pago = {
        idUsuario: this.tabsForm.get('idUsuario')?.value,
        TipoPago: this.tabsForm.get('TipoPago')?.value,
        Concepto: this.tabsForm.get('Concepto')?.value,
        Cantidad: this.tabsForm.get('Cantidad')?.value,
        numTarjeta: this.tabsForm.get('numTarjeta')?.value,
        nombreTarjeta: this.tabsForm.get('nombreTarjeta')?.value,
        FechaTarjeta: this.tabsForm.get('FechaTarjeta')?.value,
        CVV: this.tabsForm.get('CVV')?.value,
        EstadoPago : this.EstadoPago
      }
      this.paymentService.completarInformacionPago(this.guardarId!, Pagos).subscribe(data =>{
        this.toastr.info('Se envio para pagar.','Pago por confirmar!');
        this.router.navigate(['/mi-cuenta']);
        this.tabsForm.reset()
        this.ngOnInit()
      }, error => {
          console.log(error);
          this.tabsForm.reset()
          this.ngOnInit()
      }
    )};
}
