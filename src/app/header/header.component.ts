import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  

  constructor(public dialog: MatDialog) {} //inject services

  ngOnInit(): void {
   
  }
  openLoginForm(){
    this.dialog.open(LoginComponent, {width: '500px', height: '450px'});
  }

}

//All of the import statements are just importing classes(modules), and variables.
