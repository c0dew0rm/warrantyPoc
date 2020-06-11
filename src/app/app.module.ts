import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { InwardComponent } from './home/inward/inward.component';
import { OutwardComponent } from './home/outward/outward.component';
import { WarrantyComponent } from './home/warranty/warranty.component';
import { WarrantyInfoComponent } from './home/warranty/warranty-info/warranty-info.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SkuComponent } from './home/sku/sku.component';
import { FileUploadModule } from '@iplab/ngx-file-upload';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { environment } from '../environments/environment'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    HomeComponent,
    InwardComponent,
    OutwardComponent,
    WarrantyComponent,
    WarrantyInfoComponent,
    SkuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    FileUploadModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    CommonModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
