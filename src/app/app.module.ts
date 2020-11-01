//this module is the root module of the application
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; //import modules from Angular core library
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { DishdetailComponent } from './dishdetail/dishdetail.component';



//this is a decorator. decorators are functions that modify javascript classes.
//takes metadata to help describe the module.
@NgModule({ 
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
  ],
  imports: [//specifies which modules will be imported to this module
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [], //drop your services in here
  bootstrap: [AppComponent] //this means to bootstrap the application we need to bootstrap the AppComponent, i.e. the root component
})
export class AppModule { }
