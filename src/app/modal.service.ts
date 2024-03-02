import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private informacionGuardada = false;
  private modalActual: string | null = null;

  constructor() { }

  isInformacionGuardada(): boolean {
    return this.informacionGuardada;
  }

  setInformacionGuardada(guardada: boolean) {
    this.informacionGuardada = guardada;
  }

  getModalActual(): string | null {
    return this.modalActual;
  }

  setModalActual(modal: string) {
    this.modalActual = modal;
  }
}
