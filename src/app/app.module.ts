import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from "ngx-cookie-service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';
//componentes
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ProposedgradeComponent } from './components/proposedgrade/proposedgrade.component';
import { ConfigComponent } from './components/config/config.component';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';
import { SecurityComponent } from './components/security/security.component';
// Servicios
import { UsersService } from './services/users.service';
import { JwtInterceptor } from './shared/helpers/jwt.interceptor'
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SidenavComponent,
    HeaderComponent,
    UserComponent,
    CreateUserComponent,
    ProposedgradeComponent,
    ConfigComponent,
    PersonalInformationComponent,
    SecurityComponent
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
  providers: [ UsersService, CookieService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},    
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
