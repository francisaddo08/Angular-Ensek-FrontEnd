
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResponseDataComponent } from './response-data/response-data.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component : HomeComponent},
 
  {path: 'response', component : ResponseDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
