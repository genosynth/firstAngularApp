import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
//import { ListUsersComponent } from './list-users/list-users.component';
import { ProfilesComponent } from './profiles/profiles.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'reg', component:RegisterComponent},
  {path:'dashboard', component:DashboardComponent,
    canActivate:[AuthGuard]},
  {path:'profiles', component:ProfilesComponent,
    canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
