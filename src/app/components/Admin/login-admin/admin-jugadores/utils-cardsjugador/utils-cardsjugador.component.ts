import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { JugadorSelectionService } from '../../../../../service/cardId.service';

@Component({
  selector: 'app-utils-cardsjugador',
  templateUrl: './utils-cardsjugador.component.html',
  styleUrls: ['./utils-cardsjugador.component.css'],
})
export class UtilsCardsjugadorComponent implements OnInit {
  @Input() jugador: number | null = null; // Recibir el ID de la categoría como entrada
  IDjugador: number | null = null; // Variable para almacenar el ID del jugador sin formato

  //formularioTotal
  miFormularioTotal: FormGroup;
  Total: any;
  informacionJugador: any[] = [];

  @Output() onCloseModal = new EventEmitter<void>();
  showEliminarModal =false;

  openEliminarModal() {
    console.log('Modal abierto'); // ⚠️ Se muestra un log en la consola
    this.showEliminarModal = true;
  }
  closeEliminarModal() {
    this.showEliminarModal = false;
  }
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private jugadorSelectionService: JugadorSelectionService
  ) {
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
      numeroExterno: [
        '',
        [Validators.required, Validators.pattern('^[0-9]+$')],
      ],
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
    this.IDjugador = this.jugadorSelectionService.getSelectedId();
    console.log('Jornadas para el id, (intento 2): ', this.IDjugador);
      this.fetchGETjugadores();
      this.fetchDecryptedPlayerData();
  }
  /* ------------------------------------------- */

// #region get de formulario
        get folio() {
          return this.miFormularioTotal.get('folio');
        }
        get id_equipos() {
          return this.miFormularioTotal.get('id_equipos');
        }
        get imgJugador() {
          return this.miFormularioTotal.get('imgJugador');
        }
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
        get estatura() {
          return this.miFormularioTotal.get('estatura');
        }
        get peso() {
          return this.miFormularioTotal.get('peso');
        }
        get tipoSangre() {
          return this.miFormularioTotal.get('tipoSangre');
        }
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
        get tutor() {
          return this.miFormularioTotal.get('tutor');
        }

// #endregion



  guardarInformacion() {
    const TodoFormulario = this.miFormularioTotal.value;

    // Verificar si todos los campos requeridos están llenos
    if (this.miFormularioTotal) {
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

      const dataJugadorUpdate = {
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

      const enviarDatos = JSON.stringify(dataJugadorUpdate);
      // Utilizar fetch para enviar los datos
      fetch(`http://localhost:3000/jugadores/replace/${this.IDjugador}`, {
        method: 'PUT',
        body: enviarDatos,
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
            text: 'chido',
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
      //text: mensajeIdentifiacion + '\n' + mensajeDatos + '\n' + mensajeContacto + '\n' + mensajeDatoFisico + '\n' + mesnajeEscolar + '\n' + mensajeTutor,
      icon: 'success',
      timer: 2500,
      showConfirmButton: false,
    });

    // Imprimir los objetos en la consola

    console.log('Este mensaje es de Front-end no BD', this.Total);
  }


  /* -------------------------------------------- */

  fetchGETjugadores() {
    this.http
    .get<any>(`http://localhost:3000/jugadores/receive/${this.IDjugador}`)
    .subscribe(
        (data) => {
          if (Array.isArray(data)) {
            this.informacionJugador = data;
          } else {
            this.informacionJugador = [data];
          }
          console.log("estos datons encriptados",this.informacionJugador);
          this.datosEncriptados(this.informacionJugador[0]); 
        },
        (error) => {
          console.error('Error en la solicitud:', error);
          // Aquí puedes agregar código para manejar el error, como mostrar un mensaje al usuario
        }
      );
  }
  datosSerie: {} = {};

  datosEncriptados(jugador: any) {
    this.datosSerie ={
      folio: jugador.folio,
      id_equipos: jugador.id_equipos,
      nombre: jugador.nombre,
      apellidoP: jugador.apellidoP,
      apellidoM: jugador.apellidoM,
      genero: jugador.genero,
      nacimientoFecha: new Date(jugador.nacimientoFecha)
        .toISOString()
        .slice(0, 10),
      curp: jugador.curp,
      telefono: jugador.telefono,
      calle: jugador.calle,
      numeroExterno: jugador.numeroExterno,
      colonia: jugador.colonia,
      ciudad: jugador.ciudad,
      cp: jugador.cp,

      estatura: jugador.estatura,
      peso: jugador.peso,
      tipoSangre: jugador.tipoSangre,
      escolaridad: jugador.escolaridad,
      escuela: jugador.escuela,
      grado: jugador.grado,
      grupo: jugador.grupo,

      tutor: jugador.tutor,
    };
    this.miFormularioTotal.patchValue({
      nombre: jugador.nombre,
      apellidoP: jugador.apellidoP,
      apellidoM: jugador.apellidoM,
      genero: jugador.genero,
      nacimientoFecha: new Date(jugador.nacimientoFecha)
        .toISOString()
        .slice(0, 10),
        telefono: jugador.telefono,
        calle: jugador.calle,
        numeroExterno: jugador.numeroExterno,
        cp: jugador.cp,

        estatura: jugador.estatura,
        peso: jugador.peso,
        tipoSangre: jugador.tipoSangre,
        escolaridad: jugador.escolaridad,
        grado: jugador.grado,
        grupo: jugador.grupo,
  
        tutor: jugador.tutor,

         });
  }

  /* --------------------------------------------------- */
  fetchDecryptedPlayerData() {
    if (this.IDjugador) {
      this.http
        .get<any>(`http://localhost:3000/jugadores/receive/decrypt/${this.IDjugador}`)
        .subscribe(
          (data) => {
            this.informacionJugador = data;
            console.log("estos datos son limpios ",this.informacionJugador); // Verificar datos en consola
            this.datosSinEncriptar(this.informacionJugador[0]);
            console.log(this.datosSinEncriptar); // Suponiendo que la API devuelve un solo jugador
          },
          (error) => {
            console.error('Error en la solicitud:', error);
            // Manejar errores de solicitud, como mostrar un mensaje de error al usuario
          }
        );
    }
  }
  datosSinserie: {} = {};
  datosSinEncriptar(jugador: any){
    this.miFormularioTotal.patchValue({
      calle: jugador.calle,
      colonia: jugador.colonia,
      curp: jugador.curp,
      escuela: jugador.escuela,

    });
    
  }
}