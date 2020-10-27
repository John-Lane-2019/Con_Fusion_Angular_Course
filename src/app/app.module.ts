//this module is the root module of the application
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; //import modules from Angular core library

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//this is a decorator. decorators are functions that modify javascript classes.
//takes metadata to help describe the module.
@NgModule({ 
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] //AppComponent is the root component
})
export class AppModule { }
