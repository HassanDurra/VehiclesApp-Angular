import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddVehiclesComponent } from './add-vehicles/add-vehicles.component';
import { RouterModule } from '@angular/router';
import { CssLinksComponent } from './css-links/css-links.component';
import { LoginComponent } from './login/login.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import {ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    AddVehiclesComponent,
    CssLinksComponent,
    LoginComponent,
    NavigationBarComponent ,

  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot([
    { path:'vehicles/create' , component: AddVehiclesComponent} ,
    { path:'login' , component: LoginComponent} ,

   ]),
  ],
  providers: [],
  bootstrap: [AppComponent]

})

export class AppModule { }
