import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PushNotification2Component } from './push-notification2/push-notification2.component';
import { NotificationService } from './notification.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PushNotification2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
    
  ],
  providers: [NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
