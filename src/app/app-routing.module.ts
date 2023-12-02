import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomeComponent } from './components/home/home.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { ProposedgradeComponent } from './components/proposedgrade/proposedgrade.component';
import { PreliminaryProjectComponent } from './components/preliminary-project/preliminary-project.component';
import { FinalWorkComponent } from './components/final-work/final-work.component';
import { SustainabilityComponent } from './components/sustainability/sustainability.component';
import { UserComponent } from './components/user/user.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { ConfigComponent } from './components/config/config.component';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';
import { SecurityComponent } from './components/security/security.component';
import { userGuardGuard } from './shared/guard/user-guard.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'Login' },
    { path: 'Login', component:LoginComponent},
    { path: 'Seira', component:SidenavComponent, canActivate: [userGuardGuard],
    children: [
        { path: 'Home', component:HomeComponent},   
        { path: 'PresentationProject', component:PresentationComponent},         
        { path: 'PropuestaGrado', component:ProposedgradeComponent}, 
        { path: 'Anteproyecto', component:PreliminaryProjectComponent},
        { path: 'TrabajoFinal', component:FinalWorkComponent},  
        { path: 'Sustentacion', component:SustainabilityComponent},    
        { path: 'Users', component:UserComponent},   
        { path: 'CreateUser', component:CreateUserComponent}, 
        { path: 'Calendario', component:CalendarioComponent},    
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
