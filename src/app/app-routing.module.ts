import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexPageComponent} from './index-page/index-page.component';
// import {ADMINACTIVATECOMPONENT} from './admin-activate/admin-activate.component';
import {AdminLoginComponent} from './admin-login/admin-login.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {UserLoginComponent} from './user-login/user-login.component';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
   {path:'',redirectTo:'Index', pathMatch:'full'},
  {path:'Index',component:IndexPageComponent},
  {path:'Register', component:RegisterComponent},
  {path:'Login',component:LoginPageComponent},
  {path:'UserLogin', component:UserLoginComponent},
  {path:'AdminLogin',component:AdminLoginComponent},
  {path:'Forgotpassword',component:ForgotPasswordComponent},
  {path:'Dashboard',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
