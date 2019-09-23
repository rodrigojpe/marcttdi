import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm, FormBuilder } from '@angular/forms';
import { ContactService } from '../services/contact/contact.service';
import Swal from 'sweetalert2';
 declare var $: any;
// declare function init_plugins();
import { MustMatch } from '../_helpers/must-match.validator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public  barra: string;
  public envio_email = false;

  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, public _contactService: ContactService) {
    this.barra = '';
   }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          nombre: ['', Validators.required],
          apellido: ['', Validators.required],
          correo: ['', [Validators.required, Validators.email]],
          mensaje: ['', [Validators.required]]
      });


      // console.log('f  ', this.f);
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  enviarCorreo() {
    this.submitted = true;
    this.envio_email = true;
    if ( this.registerForm.value.nombre !== '' && this.registerForm.value.apellido !== ''
    && this.registerForm.value.correo !== '' && this.registerForm.value.mensaje !== '') {
      this.envio_email = true;
    } else {
      this.envio_email = false;
    }

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    // console.log(this.forma);
    this._contactService.sendEmailContact(this.registerForm.value)
                        .subscribe( (resp: any) => {
                          if (resp.contact) {
                            this.barra = 'enviado';
                              // this.closeModale();
                              this.barra = 'fin';
                              Swal.fire({
                                  type: 'success',
                                  title: 'Email enviado',
                                  text: status,
                                  footer: 'En las próximas horas te responderemos'
                                });
                              //    f.form.reset();
                              //    this.comentario = null;
                              //    this.phone = null
                              // this.status = 'exito';
                              this.envio_email = false;
                              // this.registerForm.reset();
                               this.closeModal();
                                console.log(resp);
                              //             });
  }

});
  }
    closeModal() {
      $(function () {
        console.log('entrando al modal');
        // $('#exampleModal').modal('toggle');
        $('#exampleModal').modal('hide');
      // $('#exampleModal').on('shown', function () {
      //   $('.modal').remove();
      // });
      });
    }

}
