import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-registro-jugador',
  templateUrl: './admin-registro-jugador.component.html',
  styleUrls: ['./admin-registro-jugador.component.css']
})
export class AdminRegistroJugadorComponent implements OnInit {

  /* -------Identifiacion------------------------------------- */
  miFormularioIden: FormGroup;
  Identifiacion: any; // Objeto para almacenar la información
  /* -------DATOSPerosnales-------------------------------------- */
  miFormularioDatos: FormGroup;
  datosPersonales: any; // Objeto para almacenar la información
    /* -------Contacto-------------------------------------- */
    miFormularioContacto: FormGroup;
    contacto: any; // Objeto para almacenar la infor
    /* -------DatosFISICOS-------------------------------------- */
    miFormularioDatoFisicos: FormGroup;
    datoFisico: any;
      /* -------Escolar-------------------------------------- */
      miFormularioEscolar: FormGroup;
      datosEscolares: any = {}; // Objeto para almacenar la información escolar
            /* -------Tutor-------------------------------------- */

      miFormularioTutor: FormGroup;
      datetutor: any = {}








  @Output() onCloseModal = new EventEmitter<void>();

  constructor(private fb: FormBuilder, private http: HttpClient) {
    /* Identifiacion */
    this.miFormularioIden = this.fb.group({
        folio: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
        id_equipos: ['', Validators.required],
        imgJugador: ['']
    });
    /* DatosPersonales */
    this.miFormularioDatos = this.fb.group({
        nombre: ['', [Validators.required, Validators.pattern('[a-z A-Z\s]+')]],
        apellidoP: ['', [Validators.required, Validators.pattern('[a-z A-Z\s]+')]],
        apellidoM: ['', [Validators.required, Validators.pattern('[a-z A-Z\s]+')]],
        genero: ['', Validators.required],
        nacimientoFecha: ['', Validators.required],
        curp: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9\s]+')]],
    });
    /* Contacto */
    this.miFormularioContacto = this.fb.group({
        telefono: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
        calle: ['', Validators.required],
        numeroExterno: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
        colonia: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
        ciudad: ['', [Validators.required]],
        cp: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    });
    /* DatosFISICOS */
    this.miFormularioDatoFisicos = this.fb.group({
        estatura: ['', [Validators.required, Validators.pattern('^[0-9.]+$')]],
        peso: ['', [Validators.required, Validators.pattern('^[0-9.]+$')]],
        tipoSangre: ['', Validators.required]
    });
/* Escolar */
this.miFormularioEscolar = this.fb.group({
  escolaridad: ['', Validators.required],
  escuela: ['', [Validators.required]],
  grado: ['', Validators.required],
  grupo: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]]
});
/* Tutor */
this.miFormularioTutor = this.fb.group({
  tutor: ['', [Validators.required, Validators.pattern('[a-z A-Z\s]+')]]
});
  }


  ngOnInit(): void {}



  /* ------------------------------------------- */
  

  /* Identifiacion */
  get folio() {
    return this.miFormularioIden.get('folio');
  }
  get id_equipos() {
    return this.miFormularioIden.get('id_equipos');
  }
  get imgJugador() {
    return this.miFormularioIden.get('imgJugador');
  }


  /* DatosPersonales */
  get nombre() {
    return this.miFormularioDatos.get('nombre');
  }
  get apellidoP() {
    return this.miFormularioDatos.get('apellidoP');
  }
  get apellidoM() {
    return this.miFormularioDatos.get('apellidoM');
  }
  get genero() {
    return this.miFormularioDatos.get('genero');
  }
  get nacimientoFecha() {
    return this.miFormularioDatos.get('nacimientoFecha');
  }
  get curp(){
    return this.miFormularioDatos.get('curp')
  }

/* Contacto */
get tel() {
  return this.miFormularioContacto.get('telefono');
}
get calle() {
  return this.miFormularioContacto.get('calle');
}
get numeroExterno() {
  return this.miFormularioContacto.get('numeroExterno');
}
get colonia() {
  return this.miFormularioContacto.get('colonia');
}
get ciudad() {
  return this.miFormularioContacto.get('ciudad');
}
get codigo() {
  return this.miFormularioContacto.get('cp');
}

/* Datos FISICOS */
get estatura() {
  return this.miFormularioDatoFisicos.get('estatura');
}
get peso() {
  return this.miFormularioDatoFisicos.get('peso');
}
get tipoSangre() {
  return this.miFormularioDatoFisicos.get('tipoSangre');
}

/* Escolar */
get escolaridad() {
  return this.miFormularioEscolar.get('escolaridad');
}
get escuela() {
  return this.miFormularioEscolar.get('escuela');
}
get grado() {
  return this.miFormularioEscolar.get('grado');
}
get grupo() {
  return this.miFormularioEscolar.get('grupo');
}
/* tutor */
get tutor() {
  return this.miFormularioTutor.get('tutor');
}



  /* ------------------------------------------------------------------------------ */
  guardarInformacion() {
    // Obtener los valores de los campos del formulario
    const IdentifiacionFormValue = this.miFormularioIden.value;
    const datosPersonalesFormValue = this.miFormularioDatos.value;
    const contactoFormValue = this.miFormularioContacto.value;
    const datoFisicoFormValue = this.miFormularioDatoFisicos.value;
    const escolarFormValue = this.miFormularioEscolar.value;
    const tutorFormValue = this.miFormularioTutor.value;
    // Verificar si todos los campos requeridos están llenos
    if (this.miFormularioIden.valid && 
      this.miFormularioDatos.valid && 
      this.miFormularioContacto.valid &&
      this.miFormularioDatoFisicos.valid &&
      this.miFormularioEscolar &&
      this.miFormularioTutor) {
  
      this.Identifiacion = {
        folio: IdentifiacionFormValue.folio,
        id_equipos: IdentifiacionFormValue.id_equipos,
        imgJugador: IdentifiacionFormValue.imgJugador
      };
  
      this.datosPersonales = {
        nombre: datosPersonalesFormValue.nombre,
        apellidoP: datosPersonalesFormValue.apellidoP,
        apellidoM: datosPersonalesFormValue.apellidoM,
        genero: datosPersonalesFormValue.genero,
        nacimientoFecha: datosPersonalesFormValue.nacimientoFecha,
        curp: datosPersonalesFormValue.curp
      };
  
      this.contacto = {
        telefono: contactoFormValue.telefono,
        calle: contactoFormValue.calle,
        numeroExterno: contactoFormValue.numeroExterno,
        colonia: contactoFormValue.colonia,
        ciudad: contactoFormValue.ciudad,
        cp: contactoFormValue.cp
      };
      this.datoFisico = {
        estatura: datoFisicoFormValue.estatura,
        peso: datoFisicoFormValue.peso,
        tipoSangre: datoFisicoFormValue.tipoSangre
      };
       this.datosEscolares = {
        escolaridad: escolarFormValue.escolaridad,
        escuela: escolarFormValue.escuela,
        grado: escolarFormValue.grado,
        grupo: escolarFormValue.grupo
      };
      this.datetutor = {
        tutor: tutorFormValue.tutor
      };
  
      // Mostrar mensaje de éxito
      const mensajeIdentifiacion = 
      `Folio: ${this.Identifiacion.folio}\n` +
        `id_equipos: ${this.Identifiacion.id_equipos}\n` +
        `imgJugador: ${this.Identifiacion.imgJugador}.`;
  
      const mensajeDatos = `Nombre: ${this.datosPersonales.nombre}\n` +
        `Apellido paterno: ${this.datosPersonales.apellidoP}\n` +
        `Apellido materno: ${this.datosPersonales.apellidoM}\n` +
        `Género: ${this.datosPersonales.genero}\n` +
        `nacimientoFecha de Nacimiento: ${this.datosPersonales.nacimientoFecha}\n` +
        `CURP: ${this.datosPersonales.curp}.`;
  
      const mensajeContacto = `Teléfono: ${this.contacto.telefono}\n` +
        `Calle: ${this.contacto.calle}\n` +
        `Número: ${this.contacto.numeroExterno}\n` +
        `Colonia: ${this.contacto.colonia}\n` +
        `Ciudad: ${this.contacto.ciudad}\n` +
        `Código Postal: ${this.contacto.cp}.`;
  
        const mensajeDatoFisico = `Estatura: ${this.datoFisico.estatura}\n` +
        `Peso: ${this.datoFisico.peso}\n` +
        `Tipo de sangre: ${this.datoFisico.tipoSangre}.`;

        const mesnajeEscolar = `Escolaridad: ${this.datosEscolares.escolaridad}\n,` +
        `Escuela: ${this.datosEscolares.escuela}
\n.` +
        `Grado: ${this.datosEscolares.grado}\n,` +
        `Grupo: ${this.datosEscolares.grupo}.`;

        const mensajeTutor = `Nombre del tutor: ${this.datetutor.tutor}`;
        //..... 

        const dataJugador = {
          folio: IdentifiacionFormValue.folio,
        id_equipos: IdentifiacionFormValue.id_equipos,
        imgJugador: IdentifiacionFormValue.imgJugador,

        nombre: datosPersonalesFormValue.nombre,
        apellidoP: datosPersonalesFormValue.apellidoP,
        apellidoM: datosPersonalesFormValue.apellidoM,
        genero: datosPersonalesFormValue.genero,
        nacimientoFecha: datosPersonalesFormValue.nacimientoFecha,
        curp: datosPersonalesFormValue.curp,

        telefono: contactoFormValue.telefono,
        calle: contactoFormValue.calle,
        numeroExterno: contactoFormValue.numeroExterno,
        colonia: contactoFormValue.colonia,
        ciudad: contactoFormValue.ciudad,
        cp: contactoFormValue.cp,

        estatura: datoFisicoFormValue.estatura,
        peso: datoFisicoFormValue.peso,
        tipoSangre: datoFisicoFormValue.tipoSangre,

        escolaridad: escolarFormValue.escolaridad,
        escuela: escolarFormValue.escuela,
        grado: escolarFormValue.grado,
        grupo: escolarFormValue.grupo,

        tutor: tutorFormValue.tutor
  
        }


        fetch('http://localhost:3000/jugadores/new', {
            method: 'POST',
            body: JSON.stringify(dataJugador),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(response => {
            if (!response.ok) {
              throw new Error(`Error en la solicitud: ${response.statusText}`);
            }
            return response.json();
          })
          .then(data => {
            console.log('Respuesta del servidor:', data);
            this.onCloseModal.emit();
            // Mostrar SweetAlert2 si se guardó correctamente
            Swal.fire({
              position: "top-end",
              title: 'Generado con éxito',
              //text: nombre.value,
              icon: 'success',
              timer: 1500,
              showConfirmButton: false
            });
          })
          .catch(error => {
            console.error('Error en la solicitud:', error);
            // Mostrar SweetAlert2 si hay un error en la solicitud
            Swal.fire({
              position: "top-end",
              title: 'Operación no realizada',
              text: 'Error en la solicitud al servidor',
              icon: 'error',
              timer: 2500,
              showConfirmButton: false
            });
          });
        }

      Swal.fire({
        position: "top-end",
        title: 'Operación realizada',
        //text: mensajeIdentifiacion + '\n' + mensajeDatos + '\n' + mensajeContacto + '\n' + mensajeDatoFisico + '\n' + mesnajeEscolar + '\n' + mensajeTutor,
        icon: 'success',
        timer: 2500,
        showConfirmButton: false,
      });
  
      // Imprimir los objetos en la consola
      console.log('Identifiacion', this.Identifiacion);
      console.log('Datos Personales:', this.datosPersonales);
      console.log('Contacto:', this.contacto);
      console.log('Valor de datoFisico:', this.datoFisico);
      console.log('Datos Escolares', this.datosEscolares);
      console.log('Datos Escolares', this.datetutor);

  
    } 
    
    
    
    /* else {
      // Mostrar mensaje de error si algún campo está vacío o incorrecto
      Swal.fire({
        position: "top-end",
        title: 'Operación NO realizada',
        text: 'Por favor, completa todos los campos correctamente.',
        icon: 'error',
        timer: 2500,
        showConfirmButton: false,
      });
      console.error('Algunos campos son inválidos.');
    } */
  }
  
  
  /* -------------------------------------------- */
  
