import { Component } from '@angular/core';
import { CitaService } from 'src/app/core/_services/cita.service';
import { RutGlobalService } from 'src/app/core/_services/rut-global.service';
import { TicketService } from 'src/app/core/_services/ticket.service';

@Component({
  selector: 'app-sectfiveeledate',
  templateUrl: './sectfiveeledate.component.html',
  styleUrls: ['./sectfiveeledate.component.css']
})
export class SectfiveeledateComponent {
  citas: any = [];
  sector: string = '5';
  cambios: any[] = [];
  casillaBloqueada: boolean = false;
  
  constructor(private citaService: CitaService, private RutGlobalService: RutGlobalService,
              private ticketService: TicketService) {}

  ngOnInit(): void {
    const rut: string = this.RutGlobalService.getRut5();
    console.log('Rut obtenido:', rut);
    if (rut) {
      this.citaService.getCitasPorRutSector(rut, this.sector).subscribe({
        next: (citas: any[]) => {
          this.citas = citas;
          console.log('Citas obtenidas por RUT:', this.citas);
        },
        error: (err: any) => {
          console.error('Error al obtener citas por RUT:', err);
        }
      });
    } else {
      console.warn('No se ha encontrado un RUT en el servicio global.');
    }
  }

  cambiarEstado(cita: any): void {
    if (cita.estado !== 'Completado') {
      cita.estado = 'Completado';
      this.casillaBloqueada = true;
      this.cambios.push(cita);
    }
  }

  guardarCambios(): void {
    this.cambios.forEach(cita => {
      this.createTicket(cita.id);
      this.citaService.actualizarEstadoCita(cita.id).subscribe({
        next: (response: string) => {
          console.log(response);
        },
        error: (err: any) => {
          console.error('Error al actualizar el estado de la cita:', err);
        }
      });
    });
    this.cambios = []; // Limpiar la lista de cambios después de guardar
  }

  createTicket(id: number): void {
    console.log('ID recibido en createTicket:', id); // Log del ID recibido

    this.ticketService.createTicket(id).subscribe({
      next: (response: any) => {
        console.log('Respuesta completa del servidor:', response);
      },
      error: (error: any) => {
       // Error básico
       console.error('Error al crear ticket:', error);

     }
    });
  }

}
