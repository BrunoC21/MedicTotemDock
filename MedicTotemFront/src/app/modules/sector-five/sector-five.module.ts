import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SectfivedateComponent } from './sectfivedate/sectfivedate.component';
import { SectfivedoneComponent } from './sectfivedone/sectfivedone.component';
import { SectfiveeledateComponent } from './sectfiveeledate/sectfiveeledate.component';
import { SectfivehomeComponent } from './sectfivehome/sectfivehome.component';
import { SectfiveiradateComponent } from './sectfiveiradate/sectfiveiradate.component';
import { SectfivemordateComponent } from './sectfivemordate/sectfivemordate.component';
import { SectfiveoptionComponent } from './sectfiveoption/sectfiveoption.component';
import { SectfiveprintComponent } from './sectfiveprint/sectfiveprint.component';
import { SectfivewrongComponent } from './sectfivewrong/sectfivewrong.component';

@NgModule({
  declarations: [
    SectfivedateComponent,
    SectfivedoneComponent,
    SectfiveeledateComponent,
    SectfivehomeComponent,
    SectfiveiradateComponent,
    SectfivemordateComponent,
    SectfiveoptionComponent,
    SectfiveprintComponent,
    SectfivewrongComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class SectorFiveModule { }
