import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utils-cardsjugador',
  templateUrl: './utils-cardsjugador.component.html',
  styleUrls: ['./utils-cardsjugador.component.css']
})
export class UtilsCardsjugadorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 /* Seccion Identificacion ⭐ */
 showIdentificacion = false; /*⚠️🦖 este se mantiene en true a diferencia de los demas 
 componentes porque debe cargar como primera instancia */
 openIdentificacion() {
   this.showIdentificacion = true;
   this.showDatosPersonales = false;
   this.showContacto = false;
   this.showDatosFisicos = false;
   this.showEscolar = false;
   this.showTutor = false;
 }

 closeIdentificacion() {
   this.showIdentificacion = false;
 }

 /* Seccion Datos personales ⭐*/
 showDatosPersonales = false;

 openDatosPersonales() {
   this.showDatosPersonales = true;
   this.showIdentificacion = false;
   this.showContacto = false;
   this.showDatosFisicos = false;
   this.showEscolar = false;
   this.showTutor = false;
 }

 closeDatosPersonales() {
   this.showDatosPersonales = false;
 }

 /* Seccion Contacto ⭐*/
 showContacto = false;

 openContacto() {
   this.showContacto = true;
   this.showIdentificacion = false;
   this.showDatosPersonales = false;
   this.showDatosFisicos = false;
   this.showEscolar = false;
   this.showTutor = false;
 }

 closeContacto() {
   this.showContacto = false;
 }

 /* Seccion Datos Fisicos ⭐ */
 showDatosFisicos = false;

 openDatosFisicos() {
   this.showDatosFisicos = true;
   this.showIdentificacion = false;
   this.showDatosPersonales = false;
   this.showContacto = false;
   this.showEscolar = false;
   this.showTutor = false;
 }

 closeDatosFisicos() {
   this.showDatosFisicos = false;
 }

 /* Seccion Escolar ⭐ */
 showEscolar = false;

 openEscolar() {
   this.showEscolar = true;
   this.showIdentificacion = false;
   this.showDatosPersonales = false;
   this.showContacto = false;
   this.showDatosFisicos = false;
   this.showTutor = false;
 }

 closeEscolar() {
   this.showEscolar = false;
 }

 /* Seccion Tutor ⭐*/
 showTutor = false;

 openTutor() {
   this.showTutor = true;
   this.showIdentificacion = false;
   this.showDatosPersonales = false;
   this.showContacto = false;
   this.showDatosFisicos = false;
   this.showEscolar = false;
 }

 closeTutor() {
   this.showTutor = false;
 }
}