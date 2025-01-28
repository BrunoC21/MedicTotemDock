import { Component } from '@angular/core';
import { CitaService } from 'src/app/core/_services/cita.service';
import { RutGlobalService } from 'src/app/core/_services/rut-global.service';

@Component({
  selector: 'app-secttwoecodate',
  templateUrl: './secttwoecodate.component.html',
  styleUrls: ['./secttwoecodate.component.css']
})
export class SecttwoecodateComponent {
  citas: any = [];
  sector: string = '2';
  cambios: any[] = [];
  casillaBloqueada: boolean = false;
  
  constructor(private citaService: CitaService, private RutGlobalService: RutGlobalService) {}

  ngOnInit(): void {
    const rut: string = this.RutGlobalService.getRut2();
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
    if (cita.estado === 'Pendiente') {
      cita.estado = 'Completado';
      this.casillaBloqueada = true;
      this.cambios.push(cita);
    }
  }

  guardarCambios(): void {
    this.cambios.forEach(cita => {
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
}
