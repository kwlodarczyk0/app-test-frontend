import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpInterceptorService } from './common/http-interceptor.service';
import { LoginComponent } from './common-views/login/login.component';
import { NotFoundComponent } from './common-views/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const APP_COMPONENTS = [AppComponent, LoginComponent, NotFoundComponent];

const APP_IMPORTS = [BrowserModule, AppRoutingModule, BrowserAnimationsModule];

@NgModule({
  declarations: [...APP_COMPONENTS],
  imports: [...APP_IMPORTS],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
  ],
})
export class AppModule {}
