import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SectfivedateComponent } from './modules/sector-five/sectfivedate/sectfivedate.component';
import { SectfivedoneComponent } from './modules/sector-five/sectfivedone/sectfivedone.component';
import { SectfiveeledateComponent } from './modules/sector-five/sectfiveeledate/sectfiveeledate.component';
import { SectfivehomeComponent } from './modules/sector-five/sectfivehome/sectfivehome.component';
import { SectfiveiradateComponent } from './modules/sector-five/sectfiveiradate/sectfiveiradate.component';
import { SectfivemordateComponent } from './modules/sector-five/sectfivemordate/sectfivemordate.component';
import { SectfiveoptionComponent } from './modules/sector-five/sectfiveoption/sectfiveoption.component';
import { SectfiveprintComponent } from './modules/sector-five/sectfiveprint/sectfiveprint.component';
import { SectfivewrongComponent } from './modules/sector-five/sectfivewrong/sectfivewrong.component';
import { SectfourcuradateComponent } from './modules/sector-fourd/sectfourcuradate/sectfourcuradate.component';
import { SectfourdateComponent } from './modules/sector-fourd/sectfourdate/sectfourdate.component';
import { SectfourdoneComponent } from './modules/sector-fourd/sectfourdone/sectfourdone.component';
import { SectfourhomeComponent } from './modules/sector-fourd/sectfourhome/sectfourhome.component';
import { SectfourivadateComponent } from './modules/sector-fourd/sectfourivadate/sectfourivadate.component';
import { SectfouroptionComponent } from './modules/sector-fourd/sectfouroption/sectfouroption.component';
import { SectfourprintComponent } from './modules/sector-fourd/sectfourprint/sectfourprint.component';
import { SectfourwrongComponent } from './modules/sector-fourd/sectfourwrong/sectfourwrong.component';
import { SectonedateComponent } from './modules/sector-one-shared/sectonedate/sectonedate.component';
import { SectonedoneComponent } from './modules/sector-one-shared/sectonedone/sectonedone.component';
import { SectonehomeComponent } from './modules/sector-one-shared/sectonehome/sectonehome.component';
import { SectoneoptionComponent } from './modules/sector-one-shared/sectoneoption/sectoneoption.component';
import { SectoneprintComponent } from './modules/sector-one-shared/sectoneprint/sectoneprint.component';
import { SectonewrongComponent } from './modules/sector-one-shared/sectonewrong/sectonewrong.component';
import { SecttwocuraComponent } from './modules/sector-two/secttwocura/secttwocura.component';
import { SecttwocuradateComponent } from './modules/sector-two/secttwocuradate/secttwocuradate.component';
import { SecttwodateComponent } from './modules/sector-two/secttwodate/secttwodate.component';
import { SecttwodoneComponent } from './modules/sector-two/secttwodone/secttwodone.component';
import { SecttwoecodateComponent } from './modules/sector-two/secttwoecodate/secttwoecodate.component';
import { SecttwoeradateComponent } from './modules/sector-two/secttwoeradate/secttwoeradate.component';
import { SecttwohomeComponent } from './modules/sector-two/secttwohome/secttwohome.component';
import { SecttwooptionComponent } from './modules/sector-two/secttwooption/secttwooption.component';
import { SecttwoprintComponent } from './modules/sector-two/secttwoprint/secttwoprint.component';
import { SecttwowrongComponent } from './modules/sector-two/secttwowrong/secttwowrong.component';
import { BoardAdminComponent } from './modules/shared/board-admin/board-admin.component';
import { BoardModeratorComponent } from './modules/shared/board-moderator/board-moderator.component';
import { BoardUserComponent } from './modules/shared/board-user/board-user.component';
import { HomeComponent } from './modules/shared/home/home.component';
import { HomealimentosComponent } from './modules/shared/homealimentos/homealimentos.component';
import { HomedoneComponent } from './modules/shared/homedone/homedone.component';
import { HomeexadateComponent } from './modules/shared/homeexadate/homeexadate.component';
import { HomeexamenComponent } from './modules/shared/homeexamen/homeexamen.component';
import { HomeoptionComponent } from './modules/shared/homeoption/homeoption.component';
import { HomeprintComponent } from './modules/shared/homeprint/homeprint.component';
import { HomeradiodateComponent } from './modules/shared/homeradiodate/homeradiodate.component';
import { LoginComponent } from './modules/shared/login/login.component';
import { ProfileComponent } from './modules/shared/profile/profile.component';
import { RegisterComponent } from './modules/shared/register/register.component';
import { ListarComponent } from './modules/usuarios/listar/listar.component';
import { MediclistComponent } from './modules/shared/mediclist/mediclist.component';
import { ScreendateComponent } from './modules/shared/screendate/screendate.component';
import { ScreendatetwoComponent } from './modules/shared/screendatetwo/screendatetwo.component';
import { ScreendatefourComponent } from './modules/shared/screendatefour/screendatefour.component';
import { ScreendatefiveComponent } from './modules/shared/screendatefive/screendatefive.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'evaluador', component: BoardUserComponent },
  { path: 'visador', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'usuarios', component: ListarComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'homeoption', component: HomeoptionComponent},
  { path: 'homeradiodate', component: HomeradiodateComponent},
  { path: 'homeexamen', component: HomeexamenComponent},
  { path: 'homeexadate', component: HomeexadateComponent},
  { path: 'homealimentos', component: HomealimentosComponent},
  { path: 'homeprint', component: HomeprintComponent},
  { path: 'homedone', component: HomedoneComponent},
  { path: 'sectonehome', component: SectonehomeComponent},
  { path: 'sectoneoption', component: SectoneoptionComponent},
  { path: 'sectonedate', component: SectonedateComponent},
  { path: 'sectoneprint', component: SectoneprintComponent},
  { path: 'sectonedone', component: SectonedoneComponent},
  { path: 'sectonewrong', component: SectonewrongComponent},
  { path: 'secttwohome', component: SecttwohomeComponent},
  { path: 'secttwooption', component: SecttwooptionComponent},
  { path: 'secttwodate', component: SecttwodateComponent},
  { path: 'secttwoeradate', component: SecttwoeradateComponent},
  { path: 'secttwocura', component: SecttwocuraComponent},
  { path: 'secttwocuradate', component: SecttwocuradateComponent},
  { path: 'secttwoecodate', component: SecttwoecodateComponent},
  { path: 'secttwoprint', component: SecttwoprintComponent},
  { path: 'secttwodone', component: SecttwodoneComponent},
  { path: 'secttwowrong', component: SecttwowrongComponent},
  { path: 'sectfourhome', component: SectfourhomeComponent},
  { path: 'sectfouroption', component: SectfouroptionComponent},
  { path: 'sectfourdate', component: SectfourdateComponent},
  { path: 'sectfourcuradate', component: SectfourcuradateComponent},
  { path: 'sectfourivadate', component: SectfourivadateComponent},
  { path: 'sectfourprint', component: SectfourprintComponent},
  { path: 'sectfourdone', component: SectfourdoneComponent},
  { path: 'sectfourwrong', component: SectfourwrongComponent},
  { path: 'sectfivehome', component: SectfivehomeComponent},
  { path: 'sectfiveoption', component: SectfiveoptionComponent},
  { path: 'sectfivedate', component: SectfivedateComponent},
  { path: 'sectfiveeledate', component: SectfiveeledateComponent},
  { path: 'sectfiveiradate', component: SectfiveiradateComponent},
  { path: 'sectfivemordate', component: SectfivemordateComponent},
  { path: 'sectfiveprint', component: SectfiveprintComponent},
  { path: 'sectfivedone', component: SectfivedoneComponent},
  { path: 'sectfivewrong', component: SectfivewrongComponent},
  { path: 'mediclist', component: MediclistComponent},
  { path: 'screendate', component: ScreendateComponent},
  { path: 'screendatetwo', component: ScreendatetwoComponent},
  { path: 'screendatefour', component: ScreendatefourComponent},
  { path: 'screendatefive', component: ScreendatefiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
