import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { QpTabComponent } from './qp-tab/qp-tab.component';
import { List2Component } from './components/list2/list2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ListComponent,
    QpTabComponent,
    List2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    MatTabsModule
  ],
  exports: [CommonModule, MatTabsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
