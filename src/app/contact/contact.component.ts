import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Feedback, ContactType } from '../shared/feedback';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @ViewChild('fform') feedbackFormDirective;

  feedbackForm: FormGroup;
  feedback: Feedback;
  contactType = ContactType;

  constructor(private fb: FormBuilder) {
    // setup a method to create a form.
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    // using the FormBuilder group() method to construct a new FormGroup instance and then set it's initial values.
    this.feedbackForm = this.fb.group( {
      firstname: [ '', Validators.required ],
      lastname: [ '', Validators.required ],
      telnum: [ '', Validators.required ],
      email: [ '', Validators.required ],
      agree: false,
      contacttype: 'none',
      message: ''
    });
  }

  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset({
      firstname: '',
      lastname: '',
      telnum: '',
      email: '',
      agree: false,
      contacttype: 'None',
      message: ''
    });
    this.feedbackFormDirective.resetForm();
  }

}
