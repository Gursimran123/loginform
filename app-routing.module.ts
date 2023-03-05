import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewsComponent } from './components/news/news.component';
import { SectionComponent } from './components/section/section.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [{path:'login',component:LoginComponent},
{path:'signup',component:SignupComponent},
{path:'home',component:DashboardComponent,canActivate:[AuthGuard]},
{path:'',redirectTo:'login',pathMatch:"full"},
{path:'section',component:SectionComponent},
{path:'home1',component:HomeComponent},
{path:'about',component:AboutComponent},
{path:'contact',component:ContactComponent},
{path:'news',component:NewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
