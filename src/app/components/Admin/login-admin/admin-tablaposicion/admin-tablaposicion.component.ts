import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

// 🌎 Define la constante server con la URL del servidor
const server = 'http://localhost:3000';

@Component({
  selector: 'app-admin-tablaposicion',
  templateUrl: './admin-tablaposicion.component.html',
  styleUrls: ['./admin-tablaposicion.component.css']
})
export class AdminTablaposicionComponent implements OnInit {
  miFormulario: FormGroup;
  //🌎Variables dónde se almacenará los datos de las fucniones.
  getCategorias: any[] = []
  getTorneos: any[] = [];
  idCategoria: number = 0;
  idTorneoSelecionable: number = 0;
  torneosDisponibles: any[] = [];
  tablaPocisionesPorTorneo: any[] = [];
  newPonderaciones: any[] = [];


  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.miFormulario = this.fb.group({
      goleo: ['', [Validators.required, Validators.pattern(/^(?:[1-9]|[1-9][0-9])$/)]], // Valida que sea un número entre 1 y 99
      amonestacion: ['', [Validators.required, Validators.pattern(/^(?:[1-9]|[1-9][0-9])$/)]], // Valida que sea un número entre 1 y 99
      expulsion: ['', [Validators.required, Validators.pattern(/^(?:[1-9]|[1-9][0-9])$/)]] // Valida que sea un número entre 1 y 99
    });
  }

  ngOnInit(): void {
    this.fetchGetCatagories();
    this.fetchGetTorneo();
  }

  /* ------ 📩 FUNCIONES PARA VIZUALIZAR LA TABLA DE POCISIONES  📩 ------*/
  onChangeCategoria() {
    this.filtrarTorneos();
  }
  onChangeTorneo() {
    this.idTorneoSelecionable = this.idTorneoSelecionable
  }
  filtrarTorneos(): void {
    //this.equiposDisponibles = [];
    // Obtener el objeto torneo seleccionado
    const categoriaSeleccionada = this.getCategorias.find(categorias => categorias.id == this.idCategoria);
    //console.log("Id de la categoria seleccionado", this.idCategoria, categoriaSeleccionada)
    if (categoriaSeleccionada) {
      // Filtrar los equipos disponibles según el id_categoria del torneo seleccionado.
      this.torneosDisponibles = this.getTorneos.filter(torneos => torneos.id_categorias == categoriaSeleccionada.id);
      //console.log("Resultados que coincidenn con el id_categoria:", this.torneosDisponibles)
    } else {
      this.torneosDisponibles = [];
    }
  }
  //🔍 Buscar equipos desde la base de datos.
  search(): void {
    if (this.idCategoria === 0 || this.idTorneoSelecionable === 0) {
      this.mensajeAlerta('warning', '¡Campos vacíos!', 'Todos los campos son requeridos.', false, 3300)
    } else {
      this.tablaPocisionesTorneo()
    }
  }

  get goleo() {
    return this.miFormulario.get('goleo');
  }
  get amonestacion() {
    return this.miFormulario.get('amonestacion');
  }
  get expulsion() {
    return this.miFormulario.get('expulsion');
  }

  actulizarPuntaje() {
    const goleo = this.miFormulario.get('goleo');
    const amonestacion = this.miFormulario.get('amonestacion');
    const expulsion = this.miFormulario.get('expulsion');

    // Validar que los campos de edad sean números enteros positivos
    if (goleo && amonestacion && expulsion && !isNaN(goleo.value) && !isNaN(amonestacion.value) && !isNaN(expulsion.value) &&
      Number.isInteger(goleo.value) && Number.isInteger(amonestacion.value) && Number.isInteger(expulsion.value))
    //en caso de algun ajuste de edad el +1 es para intervenir el rango de edades en las categorias
    //es decir que el renga actual es de 15 a 16 por ejemplo siendo un año en el rango de edades.
    {
      // Verificar que la edad mínima sea menor que la edad máxima
      if (goleo.value == "" || amonestacion.value == "") {
        //this.mensajeAlerta('warning', 'Datos vacíos', 'Por favor de click al botón sorteo aleatorio.', false, 3000);
        // Crear el objeto de categoría

        
        //⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
        /*      this.newPonderaciones = {
          // goleo: goleo.value,
          amonestacion: amonestacion.value,
          expulsion: expulsion.value,
        }; */
        //⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️

        // Convertir el objeto dateCategoria a JSON
        //const dataParaEnviar = JSON.stringify(this.dateCategoria);

        // Utilizar fetch para enviar los datos
        fetch('http://localhost:3000/categorias/new', {
          method: 'POST',
          //body: dataParaEnviar,
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
            // Mostrar SweetAlert2 si se guardó correctamente
            Swal.fire({
              position: "top-end",
              title: 'Generado con éxito',
              text: "nombre.value",
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
      } else {
        console.log('Error: Nombre de categoría inválido');
      }
    } else {
      console.log('Error: La edad mínima debe ser menor o igual que la edad máxima');
      // Mostrar SweetAlert2 si la edad mínima es mayor que la edad máxima
      Swal.fire({
        position: "top-end",
        title: 'Operación no realizada',
        text: 'La edad mínima debe ser menor o igual que la edad máxima',
        icon: 'error',
        timer: 2500,
        showConfirmButton: false
      });
    }
  // Mostrar SweetAlert2 si los campos de edad no son números enteros positivos
  Swal.fire({
    position: "top-end",
    title: 'Operación no realizada',
    text: 'Los campos de edad deben ser números enteros positivos',
    icon: 'error',
    timer: 2500,
    showConfirmButton: false
  });
}

mensajeAlerta(icon: any, title: string, text: string, showConfirmButton: boolean, timer: number) {
  Swal.fire({
    position: 'top-end',
    icon,
    title,
    text,
    showConfirmButton,
    allowOutsideClick: false,
    timer
  });
}
/* ------📬📦 FUNCIONES FETCH's 📦📬------*/
data: any[] = []

fetchGetCatagories() {
  this.http.get<any[]>(`${server}/categorias/receive`)
    .subscribe(data => {
      console.log('Datos de la tabla categorias:', data);
      this.getCategorias = data;
    }, error => {
      console.error('Error en la solicitud:', error);
    });
}
fetchGetTorneo() {
  this.http.get<any[]>(`${server}/torneos/receive`)
    .subscribe(data => {
      console.log('Datos de la tabla categorias:', data);
      this.getTorneos = data;
    }, error => {
      console.error('Error en la solicitud:', error);
    });
}
tablaPocisionesTorneo(){
  console.log("Peticion")
  this.http.get<any[]>(`${server}/tablaPosiciones/receive/${this.idTorneoSelecionable}`)
    .subscribe(data => {
      if (data.length === 0) {
        this.mensajeAlerta('info', '¡Sin resultados!', 'No existen datos disponibles para este torneo.', false, 4000)
        return
      } else {
        //console.log('Respuesta del servidor:', data);
        this.tablaPocisionesPorTorneo = data;
      }
    }, error => {
      //console.error('Error en la solicitud.');
      this.mensajeAlerta('error', '¡Lo sentimos, parece que algo salió mal!', 'Intentelo nuevamente, si persiste el error informe este problema al equipo de TI para su pronta resolución.', true, 6500);
    });
}
}
