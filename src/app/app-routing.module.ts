import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { List2Component } from './components/list2/list2.component';
import { PopupComponent } from './components/popup/popup.component';
import { HomePageComponent } from './home-page/home-page.component';
import { QpTabComponent } from './qp-tab/qp-tab.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'list', component: ListComponent },
  { path: 'list2', component: List2Component },
  { path: 'qptab', component: QpTabComponent },
  { path: 'popup', component: PopupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
