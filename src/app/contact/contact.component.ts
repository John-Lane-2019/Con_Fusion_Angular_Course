import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Feedback, ContactType } from '../shared/feedback';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  feedbackForm: FormGroup;
  feedback: Feedback;
  contactType = ContactType;
  constructor(private fb: FormBuilder) { 
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm(){
    this.feedbackForm = this.fb.group({
      firstName: '',
      lastName: '',
      telNum: 0,
      email: '',
      contactType: 'None',
      message: ''

    });
  }

  onSubmit(){
    this.feedback=this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset();
  } //value property of a form returns control values which in this case mirror structure of feedback class.
    


}
