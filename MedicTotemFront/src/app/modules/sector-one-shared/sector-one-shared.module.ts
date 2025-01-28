import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SectonedateComponent } from './sectonedate/sectonedate.component';
import { SectonedoneComponent } from './sectonedone/sectonedone.component';
import { SectonehomeComponent } from './sectonehome/sectonehome.component';
import { SectoneoptionComponent } from './sectoneoption/sectoneoption.component';
import { SectoneprintComponent } from './sectoneprint/sectoneprint.component';
import { SectonewrongComponent } from './sectonewrong/sectonewrong.component';


@NgModule({
  declarations: [
    SectonedateComponent,
    SectonedoneComponent,
    SectonehomeComponent,
    SectoneoptionComponent,
    SectoneprintComponent,
    SectonewrongComponent 
  
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class SectorOneSharedModule { }
