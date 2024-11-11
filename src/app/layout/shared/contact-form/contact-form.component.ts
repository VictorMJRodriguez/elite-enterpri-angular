import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactForm: FormGroup = new FormGroup({});
  isSubmitted = false;

  constructor(private fb: FormBuilder, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      from_email: ['', [Validators.required, Validators.email]],
      contact_no: ['', Validators.required],
      preferred_contact_method: [''],
      no_of_beds: ['', Validators.required],
      postcode: ['', Validators.required],
      message: ['', Validators.required],
      reply_to: [''],
    });
  }

  onSubmit(e: Event): void {
    if (this.contactForm.valid) {
      this.contactForm.get('reply_to')?.setValue(this.contactForm.get('from_email')?.value);
      this.isSubmitted = true;
      this.sendEmail(e);
    }
  } 

  sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm('service_ifsny3t', 'template_ucjc8qc', e.target as HTMLFormElement, {
        publicKey: '6HC4hgine6FbfIg8w',
      })
      .then(
        () => {
          this.toastr.success('Your query has been submitted. Our team will get back to you soon.');
          this.contactForm.reset();
          this.isSubmitted = false;
        },
        (error) => {
          this.toastr.error('Error occurred while submitting the form. Please try again later.');
          this.isSubmitted = false;
        }
      );
  }

}