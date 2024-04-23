import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { TeamSelectionService } from '../../../../../../service/team-selection.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modalutilsequipos-registrodirectortecnico',
  templateUrl: './modalutilsequipos-registrodirectortecnico.component.html',
  styleUrls: ['./modalutilsequipos-registrodirectortecnico.component.css']
})
export class ModalutilsequiposRegistrodirectortecnicoComponent implements OnInit {
  @Output() onCloseModal = new EventEmitter<void>();
  
  @Input() equiposId: number | null = null; // Recibir el ID del equipo como entrada
  selectedTeamId: number | null = null; // Variable para almacenar el ID de la categoría seleccionada
  roles: any[] = []; //este solo es para ID no sirve para nada mas

  nuevaOpcionValue: string = ''; // nueva seccion de añadir rol


  IDprueba: any = {};
  dirTec: string = '';
  nuevaOpcion: string = '';
  selectedOption: string = '';

  dirTecControl = new FormControl('', [Validators.pattern('^[a-zA-Z0-9ñ ]*$')]);
  nuevaOpcionControl = new FormControl('', [Validators.pattern('^[a-zA-Z0-9ñ ]*$')]);
  dataParaEnviar: any= {};

  constructor(   private http: HttpClient,
    private TeamSelectionService: TeamSelectionService) { }

    agregarOpcion() {
      if (this.nuevaOpcion.trim() !== '') {
        this.selectedOption = this.nuevaOpcion;
        this.nuevaOpcionValue = this.nuevaOpcion;
        this.nuevaOpcion = '';
    
        this.fetchGETCuadroTEcnico();
        this.fetchGETRoles();
    
        Swal.fire({
          position: "top-end",
          title: 'Operación no realizada',
          text: 'usted seleciono: asknoasdas menu desplegar',
          icon: 'error',
          showConfirmButton: true
        });
      } else {
        console.error('Error: Debe ingresar un valor para la nueva opción.');
      }
    }
    

  ngOnInit() {
    this.selectedTeamId = this.TeamSelectionService.getSelectedId();
    console.log('ID del equipo seleccionado:', this.selectedTeamId);
    this.fetchGETRoles();

  }

  closeModal() {
    console.log('Modal cerrado');
    this.onCloseModal.emit();
  }

  guardarCambios() {
    const nombreValido = this.dirTecControl.valid;
    const nuevaOpcionValida = this.nuevaOpcionControl.valid;
  
    if (!nombreValido || !nuevaOpcionValida ) {
      Swal.fire({
        position: "top-end",
        title: 'Operación no realizada',
        text: 'Por favor, asegúrese de que el formulario esté completo y sin errores',
        icon: 'error',
        timer: 2501,
        showConfirmButton: false,
      });
      console.error('Error: Todos los campos son requeridos o contienen valores inválidos.');
      return;
    }
  
    // Obtener el valor del rol seleccionado
    let id_rolUsuario: number | null = null;
    if (this.selectedOption !== 'NuevaOpcion') {
      id_rolUsuario = + this.selectedOption;
    }
  
    // Asignar los valores para enviar
    const dataParaEnviar = {
      id_equipos: this.selectedTeamId,
      id_rolUsuario: id_rolUsuario,
      nombre: this.dirTec
    };
    this.closeModal();

    // Llamar a la función para añadir los registros
    this.añadirRegistrosRoles(dataParaEnviar);
  
    // Mostrar el mensaje de éxito
    const mensaje = id_rolUsuario ? `Cargo: ${this.selectedOption}` : `Nuevo cargo: ${this.nuevaOpcion}`;
    Swal.fire({
      position: "top-end",
      title: 'Generado con éxito',
      text: `Nombre del director técnico: ${this.dirTec} - ${mensaje}`,
      icon: 'success',
      timer: 1500,
      showConfirmButton: false,
    });
  
    // Cerrar el modal 
    this.closeModal();
  }
  
  opcionSeleccionada() {
    if (this.selectedOption !== 'NuevaOpcion') {
      console.log('La opción seleccionada es válida');
      return;
    }

    const nuevaOpcionValida = this.nuevaOpcion.trim() !== '';

    if ( nuevaOpcionValida) {
      console.log('La opción seleccionada es válida');

        Swal.fire({
          position: "top-end",
          title: 'Opción agregada con éxito',
          text: `Nueva opción: ${this.nuevaOpcion} menu desplegarble`,
          icon: 'success',
          showConfirmButton: true
        });
      return;
    }

    Swal.fire({
      position: "top-end",
      title: 'Seleccion de otra categoria',
      text: 'En caso que no desee añadir un nuevo campo cierre todo la venta emergente',
      icon: 'info',
    });
  }

  añadirRegistrosRoles(dataParaEnviar: any) {
    const dataParaEnviar12 = JSON.stringify(dataParaEnviar);
    console.log('⭐⭐⭐⭐', dataParaEnviar12);
    fetch('http://localhost:3000/grupoTecnico/new', {
      method: 'POST',
      body: dataParaEnviar12,
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
    })
    .catch(error => {
      console.error('Error en la solicitud:', error);
      // Mostrar SweetAlert2 si hay un error en la solicitud
    });
  }
  

  fetchGETRoles() {
    //consulta para datos Categorias 🪟🪟
      // Realizar la solicitud GET para obtener los datos de la tabla categorias
      this.http.get<any[]>('http://localhost:3000/rolUsuario/receive/technicalGroup').subscribe(
        (data) => {
          console.log('Datos de la tabla categorias:', data);
          this.roles = data;
          console.log(this.roles);
        },
        (error) => {
          console.error('Error en la solicitud:', error);
        }
      );
    }
    fetchGETCuadroTEcnico() {
    //consulta para datos Categorias 🪟🪟
      // Realizar la solicitud GET para obtener los datos de la tabla categorias
      
        fetch('http://localhost:3000/rolUsuario/new/technicalGroup', {
          method: 'POST',
          body: JSON.stringify({ rol: this.nuevaOpcionValue }),
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
        })
        .catch(error => {
          console.error('Error en la solicitud:', error);
          // Mostrar SweetAlert2 si hay un error en la solicitud
        });

    }
}
