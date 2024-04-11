import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modalequipos-registrar',
  templateUrl: './modalequipos-registrar.component.html',
  styleUrls: ['./modalequipos-registrar.component.css']
})
export class ModalequiposRegistrarComponent{
  miFormulario: FormGroup;
  dateCategoria: any = {};
  categorias: any[] = [];

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.miFormulario = this.fb.group({
      nuevoEquipo: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]+$')]], // Aquí agregamos la expresión regular para permitir solo letras, números y espacios
      categoria: ['', [Validators.required]] // Control para la categoría
    });
  }

  ngOnInit() {
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


  get nuevoEquipo() {
    return this.miFormulario.get('nuevoEquipo');

  }
  @Output() onCloseModal = new EventEmitter<void>();

  guardarCategoria() {
    const nuevoEquipo = this.miFormulario.get("nuevoEquipo");
  const categoriaSeleccionada = this.miFormulario.get("categoria");

  if (nuevoEquipo && nuevoEquipo.valid && categoriaSeleccionada && categoriaSeleccionada.value) {
    this.dateCategoria = {
      nombre: nuevoEquipo.value,
      id_categorias: categoriaSeleccionada.value // Aquí se guarda el ID de la categoría seleccionada
    };
      console.log('Nombre de la categoría:', this.dateCategoria); // Accedemos directamente al valor del FormControl
      /* ----------- */
 // Convertir el objeto dateCategoria a JSON
 const dataEnviar = JSON.stringify(this.dateCategoria);
 // Utilizar fetch para enviar los datos
 fetch('http://localhost:3000/equipos/new', {
   method: 'POST',
   body: dataEnviar ,
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
     title: 'Generado con éxito' ,
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


      this.onCloseModal.emit();
      // Mostrar SweetAlert2 si se guardó correctamente
      Swal.fire({
        position: "top-end",
        title: 'Generado con éxito',
        text: nuevoEquipo.value,
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
    this.onCloseModal.emit();
  }

}
