import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaduserComponent } from './template/caduser/caduser.component';


const routes: Routes = [
  { path: '/caduser' , component: CaduserComponent },
  {path: 'caduser' , component: CaduserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'disabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
