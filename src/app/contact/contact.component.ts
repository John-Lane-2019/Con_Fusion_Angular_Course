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
    this.createForm();
  }

  ngOnInit(): void {
    
  }

  createForm(){
    this.feedbackForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      telNum: [0, Validators.required],
      email: ['', Validators.required],
      agree: false,
      contactType: 'None',
      message: ''

    });
  }

  onSubmit(){
    this.feedback=this.feedbackForm.value;//value property of a form returns control values which in this case mirror structure of feedback class.
    console.log(this.feedback);
    this.feedbackForm.reset({
      firstName: '',
      lastName: '',
      telNum: '', 
      email: '', 
      agree: false,
      contacttype: 'None',
      message: ''
    });
    this.feedbackFormDirective.resetForm();
  } 
}
