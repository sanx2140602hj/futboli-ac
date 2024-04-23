import { Component, Input, OnInit } from '@angular/core';
import { PublicServiceCATEGORIAS } from '../../../service/public-categorias.service';

@Component({
  selector: 'app-sub12',
  templateUrl: './sub12.component.html',
  styleUrls: ['./sub12.component.css']
})
export class Sub12Component implements OnInit {
  @Input() selectedId:  number | null = null;

  constructor(private publicServiceCATEGORIAS: PublicServiceCATEGORIAS) { }

  ngOnInit(): void {
    // Obtener el ID seleccionado del servicio cuando el componente se inicializa
    this.selectedId = this.publicServiceCATEGORIAS.getSelectedId();
    console.log('ID seleccionado en Sub12Component:', this.selectedId);
  }
}
