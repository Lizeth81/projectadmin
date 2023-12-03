import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderComponent } from './components/header/header.component';
import { StudentProjectComponent } from './components/student-project/student-project.component';
import { UserComponent } from './components/user/user.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ProposedgradeComponent } from './components/proposedgrade/proposedgrade.component';
import { ConfigComponent } from './components/config/config.component';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';
import { SecurityComponent } from './components/security/security.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { DraftComponent } from './components/draft/draft.component';
import { ProjectfinalComponent } from './components/projectfinal/projectfinal.component';
import { ProposedgradeDirectorComponent } from './components/proposedgrade-director/proposedgrade-director.component';
import { AnteproyectoDirectorComponent } from './components/anteproyecto-director/anteproyecto-director.component';
import { ProyectofinaldirComponent } from './components/proyectofinaldir/proyectofinaldir.component';
import { ProposedgradeJuradoComponent } from './components/proposedgrade-jurado/proposedgrade-jurado.component';
import { AnteproyectoJuradoComponent } from './components/anteproyecto-jurado/anteproyecto-jurado.component';
import { ProjectfinalJuradoComponent } from './components/projectfinal-jurado/projectfinal-jurado.component';
import { ProposedgradeAdminComponent } from './components/proposedgrade-admin/proposedgrade-admin.component';
import { AnteproyectoAdminComponent } from './components/anteproyecto-admin/anteproyecto-admin.component';
import { ProjectfinalAdminComponent } from './components/projectfinal-admin/projectfinal-admin.component';
import { InfoprojectDirectorComponent } from './components/infoproject-director/infoproject-director.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SidenavComponent,
    HeaderComponent,
    StudentProjectComponent,
    UserComponent,
    CreateUserComponent,
    ProposedgradeComponent,
    ConfigComponent,
    PersonalInformationComponent,
    SecurityComponent,
    CreateProjectComponent,
    DraftComponent,
    ProjectfinalComponent,
    ProposedgradeDirectorComponent,
    AnteproyectoDirectorComponent,
    ProyectofinaldirComponent,
    ProposedgradeJuradoComponent,
    AnteproyectoJuradoComponent,
    ProjectfinalJuradoComponent,
    ProposedgradeAdminComponent,
    AnteproyectoAdminComponent,
    ProjectfinalAdminComponent,
    InfoprojectDirectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DemoNgZorroAntdModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
