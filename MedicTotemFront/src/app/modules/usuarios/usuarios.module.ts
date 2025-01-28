import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { AdminRolesComponent } from './admin-roles/admin-roles.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { EliminarUsuarioComponent } from './eliminar-usuario/eliminar-usuario.component';



@NgModule({
  declarations: [
    ListarComponent,
    AdminRolesComponent,
    EliminarUsuarioComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    FormsModule
  ]
})
export class UsuariosModule { }
