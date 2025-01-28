import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  private apiUrl = 'http://localhost:8080/api/cita';

  constructor(private http: HttpClient) {}

  // Método para obtener todas las citas
  getAllCitas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/all`);
  }

  // Método para obtener las citas de un paciente por su RUT y Sector
  getCitasPorRutSector(rut: string, sector: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/paciente/${rut}/${sector}`);
  }

  /*getCitasPorSector(sector: string){
    return this.http.get<any[]>(`${this.apiUrl}/paciente/${sector}`);
  }*/

  // Método para actualizar el estado de una cita
  actualizarEstadoCita(id: number): Observable<string> {
    return this.http.put<string>(`${this.apiUrl}/actualizarEstado/${id}`, null);
  }

  
  // Método para actualizar el estadoLlamada de una cita
  actualizarEstadoLLamada(id: number): Observable<string> {
    return this.http.put(`${this.apiUrl}/actualizarEstadoLlamada/${id}`, null, { responseType: 'text' });
  }

  // Método para actualizar el estadoTermino de una cita
  actualizarEstadoTermino(id: number): Observable<string> {
    return this.http.put(`${this.apiUrl}/actualizarEstadoTermino/${id}`, null, { responseType: 'text' });
  }

  actualizarEstadoPerdido(id: number): Observable<string> {
    return this.http.put(`${this.apiUrl}/actualizarEstadoPerdido/${id}`, null, { responseType: 'text' });
  }

  // Método para obtener el estado de una cita
  getCitasUsuarioLogueado(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/profesional`, { withCredentials: true });
  }

  // Método para cargar datos desde un archivo Excel
  uploadExcel(file: File): Observable<string> {
    const formData: FormData = new FormData();
    formData.append('file', file);

    return this.http.post(`${this.apiUrl}/cargar`, formData, {
      responseType: 'text', // El backend devuelve un string como respuesta
    });
  }

  

}
