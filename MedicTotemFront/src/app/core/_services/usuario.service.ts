import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/usuario/';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<any[]> {
    return this.http.get<any>(API_URL + 'usuarios');
  }

  getUsuarioId(userId: number): Observable<any> {
    return this.http.get<any>(`${API_URL}${userId}`);
  }

  eliminarUsuario(userId: number): Observable<any> {
    return this.http.delete(`${API_URL}eliminar/${userId}`);
  }

  actualizarUsuario(usuario: any): Observable<any> {
    return this.http.put<any>(`${API_URL}${usuario.id}`, usuario);
  }

  actualizarBox(boxId: number): Observable<string> {
    return this.http.put(`${API_URL}actualizarBox/${boxId}`, null, { responseType: 'text' });
  }

  liberarBox(boxId: number): Observable<string> {
    return this.http.put(`${API_URL}liberarBox/${boxId}`, null, { responseType: 'text' });
  }

  obtenerBoxs(): Observable<any[]> {
    return this.http.get<any>('http://localhost:8080/api/box/disponibles');
  }


}
