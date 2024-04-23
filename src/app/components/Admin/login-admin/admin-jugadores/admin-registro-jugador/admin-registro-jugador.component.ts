import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-registro-jugador',
  templateUrl: './admin-registro-jugador.component.html',
  styleUrls: ['./admin-registro-jugador.component.css'],
})
export class AdminRegistroJugadorComponent implements OnInit {
  //formularioTotal
  miFormularioTotal: FormGroup;
  Total: any;
  equipos: any[] = [];

  @Output() onCloseModal = new EventEmitter<void>();

 constructor(private fb: FormBuilder, private http: HttpClient) {
    this.miFormularioTotal = this.fb.group({
      folio: ['', [Validators.required, Validators.pattern('^[0-9]+$'),Validators.maxLength(14)]],
      id_equipos: ['', Validators.required],
      imgJugador: [''],
      nombre: ['', [Validators.required, Validators.pattern('[a-z A-Zs]+')]],
      apellidoP: ['', [Validators.required, Validators.pattern('[a-z A-Zs]+')]],
      apellidoM: ['', [Validators.required, Validators.pattern('[a-z A-Zs]+')]],
      genero: ['', Validators.required],
      nacimientoFecha: ['', Validators.required],
      curp: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9s]+')]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      calle: ['', Validators.required],
      numeroExterno: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      colonia: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      ciudad: ['', Validators.required],
      cp: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      estatura: ['', [Validators.required, Validators.pattern('^[0-9.]+$')]],
      peso: ['', [Validators.required, Validators.pattern('^[0-9.]+$')]],
      tipoSangre: ['', Validators.required],
      escolaridad: ['', Validators.required],
      escuela: ['', Validators.required],
      grado: ['', Validators.required],
      grupo: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      tutor: ['', [Validators.required, Validators.pattern('[a-z A-Zs]+')]],
    });
  }


  ngOnInit() {
    this.fetchGETequipos();
  }
  fetchGETequipos()
  {
    this.http.get<any[]>('http://localhost:3000/equipos/receive').subscribe(
      (data) => {
          if (Array.isArray(data)) {
              this.equipos = data;
          } else {
              console.error('La respuesta del servidor no contiene un array de equipos:', data);
          }
      },
      (error) => {
          console.error('Error en la solicitud:', error);
          // Aquí puedes agregar código para manejar el error, como mostrar un mensaje al usuario
      }
  );
  }
  /* ------------------------------------------- */
// #region Mi segunda sección
  /* Identifiacion */
  get folio() {
    return this.miFormularioTotal.get('folio');
  }
  get id_equipos() {
    return this.miFormularioTotal.get('id_equipos');
  }
  get imgJugador() {
    return this.miFormularioTotal.get('imgJugador');
  }

  /* DatosPersonales */
  get nombre() {
    return this.miFormularioTotal.get('nombre');
  }
  get apellidoP() {
    return this.miFormularioTotal.get('apellidoP');
  }
  get apellidoM() {
    return this.miFormularioTotal.get('apellidoM');
  }
  get genero() {
    return this.miFormularioTotal.get('genero');
  }
  get nacimientoFecha() {
    return this.miFormularioTotal.get('nacimientoFecha');
  }
  get curp() {
    return this.miFormularioTotal.get('curp');
  }

  /* Contacto */
  get tel() {
    return this.miFormularioTotal.get('telefono');
  }
  get calle() {
    return this.miFormularioTotal.get('calle');
  }
  get numeroExterno() {
    return this.miFormularioTotal.get('numeroExterno');
  }
  get colonia() {
    return this.miFormularioTotal.get('colonia');
  }
  get ciudad() {
    return this.miFormularioTotal.get('ciudad');
  }
  get codigo() {
    return this.miFormularioTotal.get('cp');
  }

  /* Datos FISICOS */
  get estatura() {
    return this.miFormularioTotal.get('estatura');
  }
  get peso() {
    return this.miFormularioTotal.get('peso');
  }
  get tipoSangre() {
    return this.miFormularioTotal.get('tipoSangre');
  }

  /* Escolar */
  get escolaridad() {
    return this.miFormularioTotal.get('escolaridad');
  }
  get escuela() {
    return this.miFormularioTotal.get('escuela');
  }
  get grado() {
    return this.miFormularioTotal.get('grado');
  }
  get grupo() {
    return this.miFormularioTotal.get('grupo');
  }
  /* tutor */
  get tutor() {
    return this.miFormularioTotal.get('tutor');
  }
 // #endregion

  /* ------------------------------------------------------------------------------ */
  guardarInformacion() {
    // Obtener los valores de los campos del formulario
   
    const TodoFormulario = this.miFormularioTotal.value;
    // Verificar si todos los campos requeridos están llenos
    if (
       this.miFormularioTotal
    ) {
      this.Total = {
        folio: TodoFormulario.folio,
        id_equipos: TodoFormulario.id_equipos,
        imgJugador: TodoFormulario.imgJugador,
        nombre: TodoFormulario.nombre,
        apellidoP: TodoFormulario.apellidoP,
        apellidoM: TodoFormulario.apellidoM,
        genero: TodoFormulario.genero,
        nacimientoFecha: TodoFormulario.nacimientoFecha,
        curp: TodoFormulario.curp,
        telefono: TodoFormulario.telefono,
        calle: TodoFormulario.calle,
        numeroExterno: TodoFormulario.numeroExterno,
        colonia: TodoFormulario.colonia,
        ciudad: TodoFormulario.ciudad,
        cp: TodoFormulario.cp,
        estatura: TodoFormulario.estatura,
        peso: TodoFormulario.peso,
        tipoSangre: TodoFormulario.tipoSangre,
        escolaridad: TodoFormulario.escolaridad,
        escuela: TodoFormulario.escuela,
        grado: TodoFormulario.grado,
        grupo: TodoFormulario.grupo,
        tutor: TodoFormulario.tutor,
      };

      

      const dataJugador = {
        folio: TodoFormulario.folio,
        id_equipos: TodoFormulario.id_equipos,
        imgJugador: TodoFormulario.imgJugador,

        nombre: TodoFormulario.nombre,
        apellidoP: TodoFormulario.apellidoP,
        apellidoM: TodoFormulario.apellidoM,
        genero: TodoFormulario.genero,
        nacimientoFecha: TodoFormulario.nacimientoFecha,
        curp: TodoFormulario.curp,

        telefono: TodoFormulario.telefono,
        calle: TodoFormulario.calle,
        numeroExterno: TodoFormulario.numeroExterno,
        colonia: TodoFormulario.colonia,
        ciudad: TodoFormulario.ciudad,
        cp: TodoFormulario.cp,

        estatura: TodoFormulario.estatura,
        peso: TodoFormulario.peso,
        tipoSangre: TodoFormulario.tipoSangre,

        escolaridad: TodoFormulario.escolaridad,
        escuela: TodoFormulario.escuela,
        grado: TodoFormulario.grado,
        grupo: TodoFormulario.grupo,

        tutor: TodoFormulario.tutor,
      };

      fetch('http://localhost:3000/jugadores/new', {
        method: 'POST',
        body: JSON.stringify(dataJugador),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.statusText}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log('Respuesta del servidor:', data);
          this.onCloseModal.emit();
          // Mostrar SweetAlert2 si se guardó correctamente
          Swal.fire({
            position: 'top-end',
            title: 'Generado con éxito',
            //text: nombre.value,
            icon: 'success',
            timer: 1500,
            showConfirmButton: false,
          });
        })
        .catch((error) => {
          console.error('Error en la solicitud:', error);
          // Mostrar SweetAlert2 si hay un error en la solicitud
          Swal.fire({
            position: 'top-end',
            title: 'Operación no realizada',
            text: 'Error en la solicitud al servidor',
            icon: 'error',
            timer: 2500,
            showConfirmButton: false,
          });
        });
    }

    Swal.fire({
      position: 'top-end',
      title: 'Operación realizada',
      icon: 'success',
      timer: 2500,
      showConfirmButton: false,
    });
    console.log('Datos Escolares', this.Total);
  }
}
