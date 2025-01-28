import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/monitores/';

@Injectable({
  providedIn: 'root'
})
export class MonitorService {

  constructor(private http: HttpClient) { }

  obtenerTickets(): Observable<any[]> {
    return this.http.get<any[]>(`${API_URL}all`);
  }

  obtenerTicketsSector1(): Observable<any[]> {
    return this.http.get<any[]>(`${API_URL}Sector1`);
  }

  obtenerTicketsSector2(): Observable<any[]> {
    return this.http.get<any[]>(`${API_URL}Sector2`);
  }

  obtenerTicketsSector4(): Observable<any[]> {
    return this.http.get<any[]>(`${API_URL}Sector4`);
  }

  obtenerTicketsSector5(): Observable<any[]> {
    return this.http.get<any[]>(`${API_URL}Sector5`);
  }
}
