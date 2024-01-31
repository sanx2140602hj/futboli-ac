import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {
  @Output() onCloseModal = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }
  closeModal() {
    this.onCloseModal.emit();
  }
  
}
