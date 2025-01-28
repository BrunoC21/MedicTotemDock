import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminRolesComponent } from '../admin-roles/admin-roles.component';
import { EliminarUsuarioComponent } from '../eliminar-usuario/eliminar-usuario.component';
import { UsuarioService } from 'src/app/core/_services/usuario.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit{

  usuarios: any = [];

  constructor(private dialog: MatDialog,
    private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.actualizarTabla();
  }

  actualizarTabla() {
    this.usuarioService.getUsuarios().subscribe((res: any) => {
      this.usuarios = res;
    })
  }

  adminRoles(id: number){
    const dialogRef = this.dialog.open(AdminRolesComponent, {
      data: { userId: id }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.actualizarTabla();
      }
    });
  }

  eliminarUsuario(id: number){
    const dialogRef = this.dialog.open(EliminarUsuarioComponent, {
      data: { userId: id }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.actualizarTabla();
      }
    });
  }
  
}
