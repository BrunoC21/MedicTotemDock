import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private apiUrl = 'http://localhost:8080/api/ticket';

  constructor(private http: HttpClient) {}



  getNextTicketNumber(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/next`);
  }

  updateHoraConfirmacion(id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/updateHoraConfirmacion/${id}`, null);
  }

  updateHoraLlamada(id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/updateHoraLlamada/${id}`, null);
  }

  updateHoraTermino(id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/updateHoraTermino/${id}`, null);
  }

  createTicket(id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/create/${id}`, null);
  }

  updateEstado(id: number, estado: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/updateEstado/${id}`, estado);
  }

  }
