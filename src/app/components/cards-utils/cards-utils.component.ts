import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PublicServiceCATEGORIAS } from "../../service/public-categorias.service"

@Component({
  selector: 'app-cards-utils',
  templateUrl: './cards-utils.component.html',
  styleUrls: ['./cards-utils.component.css']
})
export class CardsUtilsComponent implements OnInit {
  categorias: any[] = [];
  nuevoCarta: string = '';

  constructor(
    private http: HttpClient,
    private publicServiceCATEGORIAS:PublicServiceCATEGORIAS,
  ) { }

  ngOnInit(){
    this.GetparaTabla();
  }


  GetparaTabla(){    // Realizar la solicitud GET para obtener los datos de la tabla categorias
    this.http.get<any[]>('http://localhost:3000/categorias/receive').subscribe(
      (data) => {
        console.log('Datos de la tabla categorias:', data);
        this.categorias = data;
      },
      (error) => {
        console.error('Error en la solicitud:', error);
      }
    );}
    agregarCarta() {
      if (this.nuevoCarta.trim() !== '') {
        this.categorias.push({ id: this.categorias.length + 1, nombre: this.nuevoCarta });
        this.nuevoCarta = ''; // Limpiar el campo después de agregar un jugador
      }
      this.ngOnInit();
  
    }
    publicCATEGORIAS(id: number) {
      console.log("Vamos enviar el id: ", id)
      this.publicServiceCATEGORIAS.setSelectedId(id);
     // this.ngOnInit();
  
    }
}
