import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Feedback, ContactType } from '../shared/feedback';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private fb: FormBuilder) { 
    this.createForm();
  }

  @ViewChild('fform') feedbackFormDirective;
  
  feedbackForm: FormGroup;
  feedback: Feedback;
  contactType = ContactType;
  formErrors = {
    'firstname': '',
    'lastname': '',
    'telnum': '',
    'email': ''
  };

  validationMessages = {
    'firstname':{
      'required': 'First name is required',
      'minLength': 'First name must be at least 2 characters long',
      'maxLength': 'First name cannot be more than 25 charachters'
    },
    'lastname':{
      'required': 'Last name is required',
      'minLength': 'Last name must be at least 2 characters long',
      'maxLength': 'Last name cannot be more than 25 charachters'
    },
    'telnum':{
      'required': 'Tel. number is required.',
      'pattern': 'Tel. number must only contain numbers.'
    },
    'email':{
      'required': 'Email is required.',
      'email': 'Email not in valid format.'
    }
  };

  ngOnInit(): void {
    
  }

  createForm(): void{
    this.feedbackForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      telnum: [0, [Validators.required, Validators.pattern]],
      email: ['', [Validators.required, Validators.email]],
      agree: false,
      contactType: 'None',
      message: ''
    });

    this.feedbackForm.valueChanges.
      subscribe(data => this.onValueChanged(data));

      this.onValueChanged(); //reset form validation messages
  }

  onValueChanged(data?: any){
    if(!this.feedbackForm){
      return;
    }
    const form = this.feedbackForm;
    for(const field in this.formErrors){
      if(this.formErrors.hasOwnProperty(field)){
        //clear previous error messages if any
        this.formErrors[field] = '';
        const control = form.get(field);
        if(control && control.dirty && !control.valid){
          const messages = this.validationMessages[field];
          for(const key in control.errors){
            if(control.errors.hasOwnProperty(key)){
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  onSubmit(){
    this.feedback=this.feedbackForm.value;//value property of a form returns control values which in this case mirror structure of feedback class.
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
