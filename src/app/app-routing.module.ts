import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomeComponent } from './components/home/home.component';
import { StudentProjectComponent } from './components/student-project/student-project.component';
import { UserComponent } from './components/user/user.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { ProposedgradeComponent } from './components/proposedgrade/proposedgrade.component';
import { ConfigComponent } from './components/config/config.component';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';
import { SecurityComponent } from './components/security/security.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'Login' },
    { path: 'Login', component:LoginComponent },
    { path: 'Home', component:SidenavComponent,
    children: [
        { path: '', pathMatch: 'full', redirectTo: 'Seira'},
        { path: 'Seira', component:HomeComponent},  
        { path: 'StudenProject', component:StudentProjectComponent},        
        { path: 'Users', component:UserComponent},   
        { path: 'CreateProject', component:CreateProjectComponent},
        { path: 'CreateUser', component:CreateUserComponent},     
        { path: 'propuestaGrado', component:ProposedgradeComponent },
        { path: 'Configuration', component:ConfigComponent,
          children: [
            { path: '', pathMatch: 'full', redirectTo: 'PersonalInformation'},
            { path: 'PersonalInformation', component:PersonalInformationComponent},
            { path: 'Security', component:SecurityComponent}
          ]
        },
        /*{ path: 'PreliminaryProject', component:PreliminaryProjectComponent},
        { path: 'ProjectFinal', component:ProjectFinalComponent},
        */
    ]
    }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }

