import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SectfourcuradateComponent } from './sectfourcuradate/sectfourcuradate.component';
import { SectfourdateComponent } from './sectfourdate/sectfourdate.component';
import { SectfourdoneComponent } from './sectfourdone/sectfourdone.component';
import { SectfourhomeComponent } from './sectfourhome/sectfourhome.component';
import { SectfourivadateComponent } from './sectfourivadate/sectfourivadate.component';
import { SectfouroptionComponent } from './sectfouroption/sectfouroption.component';
import { SectfourprintComponent } from './sectfourprint/sectfourprint.component';
import { SectfourwrongComponent } from './sectfourwrong/sectfourwrong.component';

@NgModule({
  declarations: [
    SectfourcuradateComponent,
    SectfourdateComponent,
    SectfourdoneComponent,
    SectfourhomeComponent,
    SectfourivadateComponent,
    SectfouroptionComponent,
    SectfourprintComponent,
    SectfourwrongComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class SectorFourdModule { }
