import { Routes } from '@angular/router'; //import route configuration (see intellisense)
import { MenuComponent } from '../menu/menu.component'; //import all the components you want to route to
import { DishdetailComponent } from '../dishdetail/dishdetail.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'dishdetail', component: DishdetailComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contactus', component: ContactComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}//redirects to home by default if no arguments passed in url
]; //routes are an array of javascript objects
   //path is a key, string value specifies component name
   //component key has a component class as a value