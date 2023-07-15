import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaduserComponent } from './template/caduser/caduser.component';
import { EditUserComponent } from './template/list-user/edit/edit.component';

const routes: Routes = [
  { path: '' , component: CaduserComponent },
  {path: 'edit/:id', component: EditUserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
