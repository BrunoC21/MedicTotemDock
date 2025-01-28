import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getEvaluadorBoard(): Observable<any> {
    return this.http.get(API_URL + 'med', { responseType: 'text' });
  }
  
  getVisadorBoard(): Observable<any> {
    return this.http.get(API_URL + 'med2', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  crearFichaAsistencia(): Observable<string> {
    return this.http.post(`http://localhost:8080/api/asistencia/new`,  {}, { responseType: 'text' });
  }
  
  actualizarFechaTermino(): Observable<string> {
    return this.http.put(`http://localhost:8080/api/asistencia/updateFechaTermino`, {}, { responseType: 'text' });
  }
  
  
}
