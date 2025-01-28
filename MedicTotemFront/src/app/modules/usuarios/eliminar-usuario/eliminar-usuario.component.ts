import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UsuarioService } from 'src/app/core/_services/usuario.service';

@Component({
  selector: 'app-eliminar-usuario',
  templateUrl: './eliminar-usuario.component.html',
  styleUrls: ['./eliminar-usuario.component.css']
})
export class EliminarUsuarioComponent {
  constructor(
    private dialogRef: MatDialogRef<EliminarUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private usuarioService: UsuarioService
  ) {}

  confirmarEliminar() {
    this.usuarioService.eliminarUsuario(this.data.userId).subscribe({
      next: (response) => {
        this.dialogRef.close(true); // Cierra el diálogo si la eliminación es exitosa
      },
      error: (error) => {
        console.error('Error al eliminar usuario:', error);
        // Puedes manejar el error de la manera que desees
      }
    });
  }

  cancelar() {
    // Cierra el diálogo sin realizar ninguna acción
    this.dialogRef.close();
  }
}

