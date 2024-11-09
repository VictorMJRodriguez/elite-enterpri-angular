import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      from_email: ['', [Validators.required, Validators.email]],
      contact_no: ['', Validators.required],
      preferred_contact_method: [''],
      no_of_beds: ['', Validators.required],
      postcode: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmit(e: Event): void {
    if (this.contactForm.valid) {
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
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }

}
