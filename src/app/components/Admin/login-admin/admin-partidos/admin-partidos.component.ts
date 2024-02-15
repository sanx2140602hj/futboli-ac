import { Component } from '@angular/core';

interface EquipoInfo {
  equipos: string;
  botiquin: boolean;
  balones: boolean;
  gafete: boolean;
  dt: boolean;
}

interface GolesInfo {
  izq: {
    golesAnotados: number;
    golesEnContra: number;
  };
  der: {
    golesAnotados: number;
    golesEnContra: number;
  };
}
@Component({
  selector: 'app-admin-partidos',
  templateUrl: './admin-partidos.component.html',
  styleUrls: ['./admin-partidos.component.css']
})
export class AdminPartidosComponent {
  equipoInfo: EquipoInfo = {
    equipos: '',
    botiquin: false,
    balones: false,
    gafete: false,
    dt: false
  };

  goles: GolesInfo = {
    izq: {
      golesAnotados: 0,
      golesEnContra: 0
    },
    der: {
      golesAnotados: 0,
      golesEnContra: 0
    }
  };
  amonestaciones = {
    equipo: '',
    codigo: '',
    casual: ''
  };

  constructor() {}

  onSwitchChange(id: string, event: any) {
    switch (id) {
      case 'Botiquin':
        this.equipoInfo.botiquin = event.target.checked;
        break;
      case 'Balones':
        this.equipoInfo.balones = event.target.checked;
        break;
      case 'Gafete':
        this.equipoInfo.gafete = event.target.checked;
        break;
      case 'DT':
        this.equipoInfo.dt = event.target.checked;
        break;
      default:
        break;
    }
  }

  guardar() {
    console.log('Información de equipos:', this.equipoInfo);
  }
  guardar1() {
    console.log('Información de goles:', this.goles);
  }
  guardarAmonestaciones(){
    console.log('Amonestaciones:', this.amonestaciones);
  }
  
}
