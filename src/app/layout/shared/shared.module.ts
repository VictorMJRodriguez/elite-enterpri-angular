import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { IconStripComponent } from './icon-strip/icon-strip.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { LayoutRoutingModule } from '../layout-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LayoutRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  declarations: [ContactFormComponent, IconStripComponent,  AboutComponent, HowItWorksComponent],
  exports: [
    ContactFormComponent, IconStripComponent, AboutComponent, HowItWorksComponent
  ]
})
export class SharedModule { }
