import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RolService } from 'src/app/core/_services/rol.service';

@Component({
  selector: 'app-admin-roles',
  templateUrl: './admin-roles.component.html',
  styleUrls: ['./admin-roles.component.css']
})
export class AdminRolesComponent implements OnInit {

  rolesToDisplay: string[] = ["ROLE_MEDICO", "ROLE_ADMIN"];
  rolesToCheck: string[] = [];

  idUsuario: number = 0;
  roles: string[] = [];
  
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private rolService: RolService,
    private dialogRef: MatDialogRef<AdminRolesComponent>
  ) {}

  ngOnInit(): void {
    this.idUsuario = this.data.userId;
    this.adminRoles(this.idUsuario);
  }

  adminRoles(id: number) {
    this.rolService.getRolesUsuario(id).subscribe({
      next: (roles) => {
        this.roles = roles;
        this.rolesToCheck = [...roles]; 
        console.log('Roles del usuario:', this.roles);
      },
      error: (error) => {
        console.error('Error al obtener roles:', error);
      }
    });
  }

  toggleRole(role: string) {
    if (this.rolesToCheck.includes(role)) {
      this.rolesToCheck = this.rolesToCheck.filter(r => r !== role);
    } else {
      this.rolesToCheck.push(role);
    }
    console.log(this.rolesToCheck)
  }

  guardarRoles() {
    this.rolService.guardarRoles(this.idUsuario, this.rolesToCheck).subscribe({
      next: (response) => {
        console.log('Roles guardados con éxito:', response);
        this.dialogRef.close(true);
      },
      error: (error) => {
        console.error('Error al guardar roles:', error);
      }
    });
  }
  
}
