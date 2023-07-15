import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './AuthInterceptor';
import { NavbarComponent } from './template/navbar/navbar.component';
import { CaduserComponent } from './template/caduser/caduser.component'
import { Userservice } from './services/User.service';
import { FooterComponent } from './template/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination'; 
import {SidebarDirective} from './sidebar.directive';
import { NgxEchartsModule } from 'ngx-echarts';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CaduserComponent,
    FooterComponent,
    SidebarDirective,
   ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
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
