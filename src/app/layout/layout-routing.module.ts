import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { GuaranteedRentComponent } from './components/guaranteed-rent/guaranteed-rent.component';
import { LandlordComponent } from './components/landlord/landlord.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,  // Use layout for all pages
    children: [
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'guaranteed-rent', component: GuaranteedRentComponent },
      { path: 'landlord', component: LandlordComponent },
      { path: 'contact-us', component: ContactUsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
