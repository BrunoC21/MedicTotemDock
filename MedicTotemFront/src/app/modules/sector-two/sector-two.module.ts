import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SecttwocuraComponent } from './secttwocura/secttwocura.component';
import { SecttwocuradateComponent } from './secttwocuradate/secttwocuradate.component';
import { SecttwodateComponent } from './secttwodate/secttwodate.component';
import { SecttwoecodateComponent } from './secttwoecodate/secttwoecodate.component';
import { SecttwoeradateComponent } from './secttwoeradate/secttwoeradate.component';
import { SecttwohomeComponent } from './secttwohome/secttwohome.component';
import { SecttwooptionComponent } from './secttwooption/secttwooption.component';
import { SecttwoprintComponent } from './secttwoprint/secttwoprint.component';
import { SecttwowrongComponent } from './secttwowrong/secttwowrong.component';

@NgModule({
  declarations: [
    SecttwocuraComponent,
    SecttwocuradateComponent,
    SecttwodateComponent,
    SecttwoecodateComponent,
    SecttwoeradateComponent,
    SecttwohomeComponent,
    SecttwooptionComponent,
    SecttwoprintComponent,
    SecttwowrongComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class SectorTwoModule { }
