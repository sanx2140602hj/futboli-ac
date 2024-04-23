// authService.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: boolean = false;
    private users = [
      { username: 'AldolfoLara', password: 'Futboli2024' },
      { username: 'LigaFutbolAC', password: 'LigaFutbolAC2024' },
      { username: 'SectorInfantil', password: 'ligadetehuacan2024' }
    ];

  constructor() { }

  login(username: string, password: string): Observable<boolean> {
    const user = this.users.find(u => u.username === username && u.password === password);
    // Si se encuentra un usuario con las credenciales proporcionadas, se devuelve true y se actualiza el estado de inicio de sesión
    if (user) {
      this.loggedIn = true;
      return of(true);
    }
    // Si no se encuentra un usuario con las credenciales proporcionadas, se devuelve false
    return of(false);
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
