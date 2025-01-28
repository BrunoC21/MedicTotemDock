import { Component } from '@angular/core';
import { CitaService } from 'src/app/core/_services/cita.service';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent{
  citas: any[] = []; // Lista de citas obtenidas
  message: string = ''; // Mensaje de respuesta al cargar archivo
  error: string = ''; // Mensaje de error
  selectedFile: File | null = null; // Archivo seleccionado para cargar

  constructor(private citaService: CitaService) {}

  ngOnInit(): void {
  }

  obtenerCitas(): void {
    this.citaService.getAllCitas().subscribe(
      (citas) => {
        this.citas = citas;
        console.log('Citas obtenidas:', this.citas);
      },
      (error) => {
        console.error('Error al obtener citas:', error);
        this.error = 'Hubo un error al obtener las citas.';
      }
    );
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  cargarArchivo(): void {
    if (this.selectedFile) {
      this.citaService.uploadExcel(this.selectedFile).subscribe(
        (response) => {
          this.message = response;
          this.error = '';
        },
        (error) => {
          console.error('Error al cargar archivo:', error);
          this.error = 'Hubo un error al cargar el archivo.';
        }
      );
    } else {
      this.error = 'Por favor selecciona un archivo antes de cargar.';
    }
  }
}
