import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../core/_services/storage.service';
import { EditarPerfilComponent } from '../editar-perfil/editar-perfil.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/core/_services/auth.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;

  constructor(private storageService: StorageService,
    private authService: AuthService,
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.actualizarPerfil();
  }

  editarPerfil(){
    const dialogRef = this.dialog.open(EditarPerfilComponent, {
      data: { userId: this.currentUser.id }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.logout();
      }
    });
  }

  actualizarPerfil() {
    this.currentUser = this.storageService.getUser();
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();
        
        window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });
  }
}


