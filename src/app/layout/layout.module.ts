import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MasterLayoutComponent } from './components/master-layout/master-layout.component';
import { AppRoutingModule } from '../app.routing';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [HeaderComponent, MasterLayoutComponent],
  exports: [MasterLayoutComponent]
})
export class LayoutModule { }
