import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-equipos-utils',
  templateUrl: './equipos-utils.component.html',
  styleUrls: ['./equipos-utils.component.css']
})
export class EquiposUtilsComponent implements OnInit {
  
  showDirectorModal = false;

  constructor() { }

  ngOnInit(): void {
  }
  openDirectorModal(){
    this.showDirectorModal = true;
  }
  closeDirectorModal() {
    this.showDirectorModal = false;
  }
  

}
