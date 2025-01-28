import { Component } from '@angular/core';
import { CitaService } from 'src/app/core/_services/cita.service';
import { TicketService } from 'src/app/core/_services/ticket.service';
import { UserService } from 'src/app/core/_services/user.service';
import { UsuarioService } from 'src/app/core/_services/usuario.service';

@Component({
  selector: 'app-mediclist',
  templateUrl: './mediclist.component.html',
  styleUrls: ['./mediclist.component.css']
})
export class MediclistComponent {
  sector: string = '1';
  Citas: any = [];
  cambios: any[] = [];
  boxs: any[] = [];
  boxId: number = 1;
  isModalVisible: boolean = true; // Nueva propiedad para controlar el modal



  constructor(
    private citaService: CitaService,

    private userService: UserService,
    private usuarioService: UsuarioService,
    private ticketService: TicketService
  ) {}

  ngOnInit(): void {
    this.getCitasUsuarioLogueado();
    this.getBoxsDisponibles();
    this.crearFichaAsistencia();
  }

  ngOnDestroy(): void {
    this.liberarBox();
    this.actualizarFechaTermino();

  }

  getCitasUsuarioLogueado(): void {
    this.citaService.getCitasUsuarioLogueado().subscribe({
      next: (citas: any[]) => {
        this.Citas = citas;
        console.log('Citas del profesional logueado:', this.Citas);
      },
      error: (err: any) => {
        console.error('Error al obtener las citas del profesional logueado:', err);
      }
    });
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

  getBoxsDisponibles(): void {
    this.usuarioService.obtenerBoxs().subscribe({
      next: (boxs: any[]) => {
        this.boxs = boxs;
        console.log('Boxs disponibles:', this.boxs);
      },
      error: (err: any) => {
        console.error('Error al obtener los boxs disponibles:', err);
      }
    });
  }

  closeModal(): void {
    this.isModalVisible = false; // Método para cerrar el modal manualmente
  }

  llamarCita(id: number): void {
    this.citaService.actualizarEstadoLLamada(id).subscribe({
      next: (response: string) => {
        console.log('Estado de llamada actualizado:', response);
        this.updateHoraLlamada(id);
        this.getCitasUsuarioLogueado(); // Refrescar la lista de citas
        this.updateTicketEstado(id, 'Llamado');
      },
      error: (err: any) => {
        console.error('Error al actualizar el estado de llamada:', err);
      }
    });
  }

  terminarCita(id: number): void {
    this.citaService.actualizarEstadoTermino(id).subscribe({
      next: (response: string) => {
        console.log('Estado de término actualizado:', response);
        this.updateHoraTermino(id);
        this.getCitasUsuarioLogueado(); // Refrescar la lista de citas
        this.updateTicketEstado(id, 'Terminado');
      },
      error: (err: any) => {
        console.error('Error al actualizar el estado de término:', err);
      }
    });
  }

  terminarCitaPerdido(id: number): void {
    this.citaService.actualizarEstadoTermino(id).subscribe({
      next: (response: string) => {
        console.log('Estado de término actualizado:', response);
        this.getCitasUsuarioLogueado(); // Refrescar la lista de citas
        this.updateTicketEstado(id, 'Perdido');
      },
      error: (err: any) => {
        console.error('Error al actualizar el estado de término:', err);
      }
    });
  }

  updateHoraLlamada(id: number): void {
    this.ticketService.updateHoraLlamada(id).subscribe(response => {
      console.log('Hora Llamada updated:', response);
    });
  }

  updateHoraTermino(id: number): void {
    this.ticketService.updateHoraTermino(id).subscribe(response => {
      console.log('Hora Termino updated:', response);
    });
  }

  confirmarBox(): void {
    if (this.boxId !== null) {
      this.usuarioService.actualizarBox(this.boxId).subscribe({
        next: (response: string) => {
          console.log(response);
          this.isModalVisible = false; // Cierra el modal tras confirmar
        },
        error: (err: any) => {
          console.error('Error al actualizar el box del usuario:', err);
        }
      });
    } else {
      alert('Por favor selecciona un Box antes de continuar.');
    }
  }

  liberarBox(): void {
    this.usuarioService.liberarBox(this.boxId).subscribe({
      next: (response: string) => {
        console.log('Box liberado:', response);
      },
      error: (err: any) => {
        console.error('Error al liberar el box del usuario:', err);
      }
    });
  }

  crearFichaAsistencia(): void {
    this.userService.crearFichaAsistencia().subscribe(
      response => {
        console.log('Ficha de asistencia creada exitosamente', response);
        // Aquí puedes agregar lógica adicional, como redirigir al usuario o mostrar un mensaje de éxito
      },
      error => {
        console.error('Error al crear la ficha de asistencia', error);
        // Aquí puedes agregar lógica adicional, como mostrar un mensaje de error
      }
    );
  }

  updateTicketEstado(id: number, estado: string) {
    this.ticketService.updateEstado(id, estado).subscribe({
        next: (response) => {
            console.log('Estado actualizado:', response);
        },
        error: (error) => {
            console.error('Error:', error);
        }
    });
  }

  actualizarFechaTermino(): void {
    this.userService.actualizarFechaTermino().subscribe({
      next: (response: string) => {
        console.log('Fecha de término actualizada exitosamente', response);
      },
      error: (err: any) => {
        console.error('Error al actualizar la fecha de término', err);
      }
    });
  }

citaPerdida(id: number): void {
  this.citaService.actualizarEstadoPerdido(id).subscribe({
    next: (response: string) => {
      console.log('Estado de perdida actualizado:', response);
      this.getCitasUsuarioLogueado();
    },
    error: (err: any) => {
      console.error('Error al actualizar el estado:', err);
    }
  });
}
}

