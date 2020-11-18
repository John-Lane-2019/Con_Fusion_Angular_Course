import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';//turns component into a dialog

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

//To make this component be opened from another component, 
//you need to declare this as an EntryComponent in the AppModule, 
//by adding the following to the NgModule decorator. In addition you need to import the MatDialogModule;

