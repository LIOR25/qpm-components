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
import { InfoTabComponent } from './info-tab/info-tab.component';
import { MessageComponent } from './components/message/message.component';
import { IssueListComponent } from './components/issue-list/issue-list.component';
import { PopupComponent } from './components/popup/popup.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { PopupIssueComponent } from './components/popup-issue/popup-issue.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ListComponent,
    QpTabComponent,
    List2Component,
    InfoTabComponent,
    MessageComponent,
    IssueListComponent,
    PopupComponent,
    CarouselComponent,
    PopupIssueComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    MatTabsModule,
  ],
  exports: [CommonModule, MatTabsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
