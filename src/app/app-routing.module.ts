import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpDashboardComponent } from './emp-dashboard/emp-dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', component : LoginComponent , pathMatch: 'full'},
  {path: 'emp-dashboard', component: EmpDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
}
