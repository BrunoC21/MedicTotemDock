import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { HomeComponent } from './home/home.component';
import { HomealimentosComponent } from './homealimentos/homealimentos.component';
import { HomedoneComponent } from './homedone/homedone.component';
import { HomeexadateComponent } from './homeexadate/homeexadate.component';
import { HomeexamenComponent } from './homeexamen/homeexamen.component';
import { HomeoptionComponent } from './homeoption/homeoption.component';
import { HomeprintComponent } from './homeprint/homeprint.component';
import { HomeradiodateComponent } from './homeradiodate/homeradiodate.component';
import { LoginComponent } from './login/login.component';
import { MediclistComponent } from './mediclist/mediclist.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ScreendateComponent } from './screendate/screendate.component';
import { ScreendatetwoComponent } from './screendatetwo/screendatetwo.component';
import { ScreendatefourComponent } from './screendatefour/screendatefour.component';
import { ScreendatefiveComponent } from './screendatefive/screendatefive.component';



@NgModule({
  declarations: [
    BoardModeratorComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardUserComponent,
    EditarPerfilComponent,
    HomeoptionComponent,
    HomeexamenComponent,
    HomealimentosComponent,
    HomeprintComponent,
    HomedoneComponent,
    HomeexadateComponent,
    HomeradiodateComponent,
    MediclistComponent,
    ScreendateComponent,
    ScreendatetwoComponent,
    ScreendatefourComponent,
    ScreendatefiveComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class SharedModule { }
