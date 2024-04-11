import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modalequipos-editar',
  templateUrl: './modalequipos-editar.component.html',
  styleUrls: ['./modalequipos-editar.component.css']
})
export class ModalequiposEditarComponent implements OnInit {
  @Input() equiposId: number | null = null; // Recibir el ID del equipo como entrada
IDprueba: any = {};
  editarDatos: any = {};

  miFormulario: FormGroup;
  dateequipos: any = {};
  categorias: any[] = [];

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.miFormulario = this.fb.group({
      equipoNombre: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]+$')]], // Aquí agregamos la expresión regular para permitir solo letras, números y espacios
      categoria: ['', [Validators.required]] // Control para la categoría

    });
  }
  ngOnInit() {
    console.log('Editar de la equipos con ID:', this.equiposId);
    this.fetchGEtequiposs();
// Realizar la solicitud GET para obtener los datos de la tabla categorias
this.http.get<any[]>('http://localhost:3000/categorias/receive').subscribe(
  (data) => {
    console.log('Datos de la tabla categorias:', data);
    this.categorias = data;
  },
  (error) => {
    console.error('Error en la solicitud:', error);
  }
);
  }
  fetchGEtequiposs() {
    // Realizar la solicitud GET para obtener los datos de la tabla equiposs
    this.http.get<any[]>('http://localhost:3000/equipos/receive').subscribe(
      (data) => {
        console.log('Datos de la tabla equiposs:', data);
        // Filtrar los datos para incluir solo el que coincide con equiposId
        this.editarDatos = data.find(
          (equipos: any) => equipos.id === this.equiposId
        );
  
        // Asignar el nombre y la categoría al formulario
        this.miFormulario.patchValue({
          equipoNombre: this.editarDatos.nombre,
          categoria: this.editarDatos.id_categorias
        });
      },
      (error) => {
        console.error('Error en la solicitud:', error);
      }
    );
  }
  
  get equipoNombre() {
    return this.miFormulario.get('equipoNombre');

  }
  @Output() onCloseModal = new EventEmitter<void>();

  equipoNombreGuardar() {
    const equipoNombre = this.miFormulario.get("equipoNombre");
    const categoriaSeleccionada = this.miFormulario.get("categoria");
  if (equipoNombre && equipoNombre.valid && categoriaSeleccionada && categoriaSeleccionada.value) {
      this.dateequipos = {
        nombre: equipoNombre.value,
        id_categorias: categoriaSeleccionada.value // Aquí se guarda el ID de la categoría seleccionada

      };
/* ------------------------------------------------------------------ */
 // Convertir el objeto dateCategoria a JSON
 const id = this.equiposId;

 const dataParaEnviar = JSON.stringify(this.dateequipos);
 const IDprueba = JSON.stringify(id);

 // Utilizar fetch para enviar los datos
 fetch(`http://localhost:3000/equipos/replace/teams/${IDprueba}`, {
   method: 'PATCH',
   body: dataParaEnviar,
   headers: {
     'Content-Type': 'application/json',
   },
 })
   .then((response) => {
     if (!response.ok) {
       throw new Error(`Error en la solicitud: ${response.statusText} `);
     }
     return response.json();
   })
   .then((data) => {
     console.log('Respuesta del servidor:', data);
     this.onCloseModal.emit();
     // Aquí puedes agregar la lógica para manejar la respuesta del servidor
   })
   .catch((error) => {
     console.error('Error en la solicitud:', error);
     // Aquí puedes agregar la lógica para manejar el error
   });



      console.log('editar de la categoría:', this.dateequipos); // Accedemos directamente al valor del FormControl
      this.onCloseModal.emit();

      // Mostrar SweetAlert2 si se guardó correctamente
      Swal.fire({
        position: "top-end",
        title: 'Cambio generado con éxito',
        text: equipoNombre.value,
        icon: 'success',
        timer: 1500,
        showConfirmButton: false,

      });
    } else {
      console.log('Error: No se puede guardar la categoría debido a errores en el formulario');

      // Mostrar SweetAlert2 si la operación no se realizó correctamente
      Swal.fire({
        position: "top-end",
        title: 'Operación no realizada',
        text: 'Por favor, asegúrese de que el formulario esté completo y sin errores',
        icon: 'error',
        timer: 2500,
        showConfirmButton: false,

      });
    }
  }



  closeModal() {
    console.log('Modal de edición cerrado');
    this.onCloseModal.emit();
  }


  guardarCambios() {
    // Lógica para guardar los cambios en el equipo
    console.log('Nombre del equipo:', this.equipoNombre);
    this.closeModal(); // Cerrar el modal después de guardar los cambios
  }
}
