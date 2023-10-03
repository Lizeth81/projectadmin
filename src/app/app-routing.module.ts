import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'Login' },
    { path: 'Login', component:LoginComponent },
    { path: 'Home', component:HomeComponent,
    children: [
        /*{ path: '', pathMatch: 'full', redirectTo: 'StudenProject'},
        { path: 'StudenProject', component:StudentProjectComponent},        
        { path: 'propuestaGrado', component:ProposedGradeComponent },
        { path: 'PreliminaryProject', component:PreliminaryProjectComponent},
        { path: 'ProjectFinal', component:ProjectFinalComponent},
        { path: 'Users', component:UserComponent},
        { path: 'CreateUser', component:CreateUserComponent},
        { path: 'Configuration', component:ConfigurationComponent}*/
    ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
