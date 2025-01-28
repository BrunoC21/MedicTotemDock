import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UsuarioService } from 'src/app/core/_services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit{

  usuario: any = {};

  placeholderUsername: string = 'Nombre de Usuario';
  placeholderEmail: string = 'Correo Electrónico';


  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private usuarioService: UsuarioService,
    private dialogRef: MatDialogRef<EditarPerfilComponent>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.extraerInformacion()
  }

  extraerInformacion() {

    this.usuarioService.getUsuarioId(this.data.userId).subscribe({
    next: (res: any) => {
      this.usuario = res;
      this.placeholderUsername = this.usuario.username;
      this.placeholderEmail = this.usuario.email;
      this.usuario.username = '';
      this.usuario.email = '';
      this.usuario.password = '';
    },
    error: (error:any)=> {
      console.error('Error al actualizar el usuario:', error);
    }});
    
  }

  guardarCambios() {
    console.log(this.usuario);
    this.usuarioService.actualizarUsuario(this.usuario).subscribe({
      next:(response: any) => {
        console.log('Usuario actualizado con éxito:', response);
        this.dialogRef.close(true);
        this.router.navigate(['/login']);
      },
      error:(error: any) => {
        console.error('Error al actualizar el usuario:', error);
      }
    });
  }
}
