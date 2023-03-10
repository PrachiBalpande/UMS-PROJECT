import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetpasswComponent } from './forgetpassw/forgetpassw.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UnlockAccountComponent } from './unlock-account/unlock-account.component';

const routes: Routes = [
  {
    path:'login', component:LoginComponent
  },
  {
    path:'Signup', component:SignupComponent
  },
  {
    path:'unlock Account', component:UnlockAccountComponent
  },
  {
    path:'unlockAcc', component:UnlockAccountComponent
  },
  
  {
  path:'forgetpassw',  component:ForgetpasswComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
