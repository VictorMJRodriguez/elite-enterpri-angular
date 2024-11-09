import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { CoreModule } from '../core/core.module';
import { HomeComponent } from './components/home/home.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { GuaranteedRentComponent } from './components/guaranteed-rent/guaranteed-rent.component';
import { LandlordComponent } from './components/landlord/landlord.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    LayoutRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [LayoutComponent, HomeComponent, AboutUsComponent, GuaranteedRentComponent, LandlordComponent, ContactUsComponent],
  exports: [
    LayoutComponent,
    HomeComponent,
  ]
})
export class LayoutModule { }
