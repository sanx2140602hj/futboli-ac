

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'URL_DE_TU_API';

  constructor(private http: HttpClient) { }
//token 2 == true o false 
//validacion.service. / ronaser asidbjashsdhs 
  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password });
    //token 1 exporta
  }
}
