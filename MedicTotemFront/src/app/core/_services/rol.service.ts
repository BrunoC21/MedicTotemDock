import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/roles/';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  constructor(private http: HttpClient) {}

  getRolesUsuario(userId: number): Observable<string[]> {
    return this.http.get<string[]>(`${API_URL}user-roles/${userId}`);
  }

  guardarRoles(idUsuario: number, roles: string[]): Observable<any> {
    console.log("estos roles se actualizan " + roles);
    return this.http.post(`${API_URL}guardar-roles/${idUsuario}`, roles);
  }
  
}
