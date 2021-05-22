import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {FormComponent} from './form/form.component';
import {GrantsComponent} from './grants/grants.component';
import {GrantComponent} from './grant/grant.component';

const routes: Routes = [
  {path: '', component: MainComponent, pathMatch: 'full'},
  {path: 'grants', component: GrantsComponent},
  {path: 'grants/:id', component: GrantComponent},
  {path: 'form', component: FormComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
