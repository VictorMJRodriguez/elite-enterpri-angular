import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TopNavComponent } from './components/navbar/top-nav/top-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { Routes } from '@angular/router';
import { AboutUsComponent } from '../layout/components/about-us/about-us.component';
import { LayoutRoutingModule } from '../layout/layout-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  declarations: [ NavbarComponent, TopNavComponent, FooterComponent],
  exports: [
    NavbarComponent,
    TopNavComponent,
    FooterComponent
  ],
})
export class CoreModule { }
