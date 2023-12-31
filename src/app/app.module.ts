import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './AuthInterceptor';
import { NavbarComponent } from './template/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CaduserComponent } from './template/caduser/caduser.component'
import { Userservice } from './services/User.service';
import { FooterComponent } from './template/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination'; 
import {SidebarDirective} from './sidebar.directive';
import { SidebarComponent } from './template/sidebar/sidebar.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { ListUserComponent } from './template/list-user/user.component';
import { EditUserComponent } from './template/list-user/edit/edit.component';

@NgModule({
  declarations: [
    EditUserComponent,
    ListUserComponent,
    AppComponent,
    NavbarComponent,
    CaduserComponent,
    FooterComponent,
    SidebarDirective,
    SidebarComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule,
    NgxPaginationModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  providers: [
    HttpClient,
    Userservice,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
