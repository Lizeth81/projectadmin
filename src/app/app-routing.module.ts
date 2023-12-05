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
import { ProposedgradeJuradoComponent } from './components/proposedgrade-jurado/proposedgrade-jurado.component';
import { ProposedgradeDirectorComponent } from './components/proposedgrade-director/proposedgrade-director.component';
import { ProposedgradeAdminComponent } from './components/proposedgrade-admin/proposedgrade-admin.component';
import { AnteproyectoDirectorComponent } from './components/anteproyecto-director/anteproyecto-director.component';
import { AnteproyectoJuradoComponent } from './components/anteproyecto-jurado/anteproyecto-jurado.component';
import { AnteproyectoAdminComponent } from './components/anteproyecto-admin/anteproyecto-admin.component';
import { DraftComponent } from './components/draft/draft.component';
import { ProjectfinalComponent } from './components/projectfinal/projectfinal.component';
import { ProyectofinaldirComponent } from './components/proyectofinaldir/proyectofinaldir.component';
import { ProjectfinalJuradoComponent } from './components/projectfinal-jurado/projectfinal-jurado.component';
import { ProjectfinalAdminComponent } from './components/projectfinal-admin/projectfinal-admin.component';
import { ConfigComponent } from './components/config/config.component';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';
import { SecurityComponent } from './components/security/security.component';
import { InfoprojectDirectorComponent } from './components/infoproject-director/infoproject-director.component';
import { InfoanteproyectoDirectorComponent } from './components/infoanteproyecto-director/infoanteproyecto-director.component';
import { InfoanteproyectoJuradoComponent } from './components/infoanteproyecto-jurado/infoanteproyecto-jurado.component';
import { InfoprojectJuradoComponent } from './components/infoproject-jurado/infoproject-jurado.component';
import { SustentacionJuradoComponent } from './components/sustentacion-jurado/sustentacion-jurado.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'Login' },
    { path: 'Login', component:LoginComponent },
    { path: 'Home', component:HomeComponent,
    children: [
        { path: '', pathMatch: 'full', redirectTo: 'StudenProject'},
        { path: 'StudenProject', component:StudentProjectComponent},        
        { path: 'Users', component:UserComponent},   
        { path: 'CreateProject', component:CreateProjectComponent},
        { path: 'CreateUser', component:CreateUserComponent},     
        { path: 'propuestaGrado', component:ProposedgradeComponent },
        { path: 'propuestaGradoDir', component:ProposedgradeDirectorComponent},
        { path: 'propuestaGradoJurado', component:ProposedgradeJuradoComponent},
        { path: 'propuestaGradoAdmin', component: ProposedgradeAdminComponent},
        { path: 'anteproyecto', component:DraftComponent },
        { path: 'anteproyetoDir', component:AnteproyectoDirectorComponent},
        { path: 'anteproyectoJurado', component:AnteproyectoJuradoComponent},
        { path: 'anteproyectoAdmin', component:AnteproyectoAdminComponent},
        { path: 'proyectofinaldir', component:ProyectofinaldirComponent},
        { path: 'projectfinal', component:ProjectfinalComponent},
        { path: 'proyectoFinalAdmin', component:ProjectfinalAdminComponent},
        { path: 'proyectoFinalJurado', component:ProjectfinalJuradoComponent},
        { path: 'informacionProyectoDirector', component:InfoprojectDirectorComponent},
        { path: 'informacionanteproyectoDirector', component:InfoanteproyectoDirectorComponent},
        { path: 'informacionAnteproyectoJurado', component:InfoanteproyectoJuradoComponent},
        { path: 'informacionProyectoJurado', component:InfoprojectJuradoComponent},
        { path: 'sustentacionJurado', component:SustentacionJuradoComponent},
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

