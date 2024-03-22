import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-utils-cardsjugador',
  templateUrl: './utils-cardsjugador.component.html',
  styleUrls: ['./utils-cardsjugador.component.css']
})
export class UtilsCardsjugadorComponent implements OnInit {

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

  constructor(private fb: FormBuilder) {
    /* Identifiacion */
    this.miFormularioIden = this.fb.group({
        folio: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
        equipo: ['', Validators.required],
        archivo: ['']
    });
    /* DatosPersonales */
    this.miFormularioDatos = this.fb.group({
        nombre: ['', [Validators.required, Validators.pattern('[a-z A-Z\s]+')]],
        apellidoPaterno: ['', [Validators.required, Validators.pattern('[a-z A-Z\s]+')]],
        apellidoMaterno: ['', [Validators.required, Validators.pattern('[a-z A-Z\s]+')]],
        genero: ['', Validators.required],
        fecha: ['', Validators.required],
        curp: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9\s]+')]],
    });
    /* Contacto */
    this.miFormularioContacto = this.fb.group({
        telefono: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
        calle: ['', Validators.required],
        numero: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
        colonia: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
        ciudad: ['', [Validators.required]],
        codigoPostal: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
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





  /* ------------------------------------------- */
  
  ngOnInit(): void {}

  /* Identifiacion */
  get folio() {
    return this.miFormularioIden.get('folio');
  }
  get equipo() {
    return this.miFormularioIden.get('equipo');
  }
  get archivo() {
    return this.miFormularioIden.get('archivo');
  }


  /* DatosPersonales */
  get nombre() {
    return this.miFormularioDatos.get('nombre');
  }
  get apellidoPaterno() {
    return this.miFormularioDatos.get('apellidoPaterno');
  }
  get apellidoMaterno() {
    return this.miFormularioDatos.get('apellidoMaterno');
  }
  get genero() {
    return this.miFormularioDatos.get('genero');
  }
  get fecha() {
    return this.miFormularioDatos.get('fecha');
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
get numero() {
  return this.miFormularioContacto.get('numero');
}
get colonia() {
  return this.miFormularioContacto.get('colonia');
}
get ciudad() {
  return this.miFormularioContacto.get('ciudad');
}
get codigo() {
  return this.miFormularioContacto.get('codigoPostal');
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
        equipo: IdentifiacionFormValue.equipo,
        archivo: IdentifiacionFormValue.archivo
      };
  
      this.datosPersonales = {
        nombre: datosPersonalesFormValue.nombre,
        apellidoPaterno: datosPersonalesFormValue.apellidoPaterno,
        apellidoMaterno: datosPersonalesFormValue.apellidoMaterno,
        genero: datosPersonalesFormValue.genero,
        fecha: datosPersonalesFormValue.fecha,
        curp: datosPersonalesFormValue.curp
      };
  
      this.contacto = {
        telefono: contactoFormValue.telefono,
        calle: contactoFormValue.calle,
        numero: contactoFormValue.numero,
        colonia: contactoFormValue.colonia,
        ciudad: contactoFormValue.ciudad,
        codigoPostal: contactoFormValue.codigoPostal
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
      const mensajeIdentifiacion = `Folio: ${this.Identifiacion.folio}\n` +
        `Equipo: ${this.Identifiacion.equipo}\n` +
        `Archivo: ${this.Identifiacion.archivo}.`;
  
      const mensajeDatos = `Nombre: ${this.datosPersonales.nombre}\n` +
        `Apellido paterno: ${this.datosPersonales.apellidoPaterno}\n` +
        `Apellido materno: ${this.datosPersonales.apellidoMaterno}\n` +
        `Género: ${this.datosPersonales.genero}\n` +
        `Fecha de Nacimiento: ${this.datosPersonales.fecha}\n` +
        `CURP: ${this.datosPersonales.curp}.`;
  
      const mensajeContacto = `Teléfono: ${this.contacto.telefono}\n` +
        `Calle: ${this.contacto.calle}\n` +
        `Número: ${this.contacto.numero}\n` +
        `Colonia: ${this.contacto.colonia}\n` +
        `Ciudad: ${this.contacto.ciudad}\n` +
        `Código Postal: ${this.contacto.codigoPostal}.`;
  
        const mensajeDatoFisico = `Estatura: ${this.datoFisico.estatura}\n` +
        `Peso: ${this.datoFisico.peso}\n` +
        `Tipo de sangre: ${this.datoFisico.tipoSangre.value}.`;

        const mesnajeEscolar = `Escolaridad: ${this.datosEscolares.escolaridad}\n,` +
        `Escuela: ${this.datosEscolares.escuela}\n.` +
        `Grado: ${this.datosEscolares.grado}\n,` +
        `Grupo: ${this.datosEscolares.grupo}.`;

        const mensajeTutor = `Nombre del tutor: ${this.datetutor.tutor}`;

      Swal.fire({
        position: "top-end",
        title: 'Operación realizada',
        text: mensajeIdentifiacion + '\n' + mensajeDatos + '\n' + mensajeContacto + '\n' + mensajeDatoFisico + '\n' + mesnajeEscolar + '\n' + mensajeTutor,
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

  
    } else {
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
    }
  }
  
  
  /* -------------------------------------------- */
  

 /* ------------------------------------- */
 showEliminarModal = false;

 openEliminarModal(){
   this.showEliminarModal = true;
 }
 closeEliminarModal(){
   this.showEliminarModal = false;
 }

}