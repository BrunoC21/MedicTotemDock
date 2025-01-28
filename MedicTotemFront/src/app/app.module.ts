import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { httpInterceptorProviders } from './core/_helpers/http.interceptor';
import { SectorFiveModule } from './modules/sector-five/sector-five.module';
import { SectorFourdModule } from './modules/sector-fourd/sector-fourd.module';
import { SectorOneSharedModule } from './modules/sector-one-shared/sector-one-shared.module';
import { SectorTwoModule } from './modules/sector-two/sector-two.module';
import { SharedModule } from './modules/shared/shared.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
    UsuariosModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SectorOneSharedModule,
    SectorTwoModule,
    SectorFiveModule,
    SectorFourdModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
