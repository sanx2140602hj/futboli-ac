import { Component, OnInit } from '@angular/core';
import { obtenerNombreAleatorio } from '../../service/copy-programer.service'; // Importar la función desde service.ts

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  currentYear: number;
  nombreAleatorio: string = ''; // Inicializar la propiedad con un valor predeterminado
  saludo: string = ''; // Variable para almacenar el mensaje de saludo
  constructor() {
    this.currentYear = new Date().getFullYear();
  }

  ngOnInit(): void {
    this.actualizarSaludo();
    this.actualizarNombreAleatorio(); // Llamar a la función para actualizar el nombre aleatorio
    setInterval(() => {
      this.actualizarNombreAleatorio(); // Actualizar el nombre aleatorio cada 45 segundos
    }, 1500); // 45 segundos en milisegundos
  }
  enviarMensajeWhatsApp(): void {
    const numeroWhatsApp = '+522383035208'; // Coloca aquí el número de WhatsApp
    //    const numeroWhatsApp = '+522222522807'; // Coloca aquí el número de WhatsApp
    const mensaje = this.saludo;
    const enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    window.open(enlaceWhatsApp, '_blank');
  }
  compartirEnFacebook(): void {
    const enlaceFacebook = 'https://www.facebook.com/share/S8xPt7xeg8YqdYbR/?mibextid=qi2Omg';
    window.open(enlaceFacebook, '_blank');
  }
  compartirEnMaps(): void {
    const enlaceGoogleMaps = 'https://www.google.com.mx/maps/dir//LIGA+DE+FUTBOL+DE+TEHUACAN,+AC,+Calle+16+Pte+112,+Jacarandas,+75730+Tehuac%C3%A1n,+Pue./@18.4744148,-97.3952102,17z/data=!4m17!1m7!3m6!1s0x85c5a2d558b20d11:0xb674afaf4ee8ce26!2sLIGA+DE+FUTBOL+DE+TEHUACAN,+AC!8m2!3d18.4744148!4d-97.3952102!16s%2Fg%2F1tfd79c4!4m8!1m0!1m5!1m1!1s0x85c5a2d558b20d11:0xb674afaf4ee8ce26!2m2!1d-97.395186!2d18.4743608!3e2?entry=ttu';
   //    const enlaceGoogleMaps = 'https://maps.app.goo.gl/XEVKBcZNr29ySBVZ7';
    window.open(enlaceGoogleMaps, '_blank');
  }
  actualizarNombreAleatorio(): void {
    this.nombreAleatorio = obtenerNombreAleatorio(); // Obtener un nombre aleatorio
  }

  actualizarSaludo(): void {
    const horaActual = new Date().getHours();
    //console.log(horaActual);
    if (horaActual >= 5 && horaActual < 12) {
      this.saludo = 'Buenos días, ¿Quisiera saber los requisitos para poder ingresar al club? 🥅⚽🏃🏽';
    } else if (horaActual >= 12 && horaActual < 19) {
      this.saludo = 'Buenas tardes, ¿Quisiera saber los requisitos para poder ingresar al club? 🥅⚽🏃🏽';
    } else {
      this.saludo = 'Buenas noches, ¿Quisiera saber los requisitos para poder ingresar al club? 🥅⚽🏃🏽';
    }
  }
}
