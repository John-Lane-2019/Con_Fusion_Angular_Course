//this module is the root module of the application
//module imports:
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; //import modules from Angular core library
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import 'hammerjs';
//component imports:
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { DishService } from './services/dish.service';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
//this is a decorator. decorators are functions that modify javascript classes.
//takes metadata to help describe the module.
@NgModule({ 
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
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
    MatButtonModule,
  ],
  providers: [DishService], //drop your services in here
  bootstrap: [AppComponent] //this means to bootstrap the application we need to bootstrap the AppComponent, i.e. the root component
})
export class AppModule { }
