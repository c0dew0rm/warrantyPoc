import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { WarrantyComponent } from './home/warranty/warranty.component';
import { InwardComponent } from './home/inward/inward.component';
import { OutwardComponent } from './home/outward/outward.component';
import { WarrantyInfoComponent } from './home/warranty/warranty-info/warranty-info.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent, children: [
    { path: 'inward', component: InwardComponent, },
    { path: 'outward', component: OutwardComponent, },
    { path: 'warranty', component: WarrantyComponent,},
    { path: 'warrantyList', component: WarrantyInfoComponent, }
  ]},
  { path: 'sidebar', component: SidebarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
