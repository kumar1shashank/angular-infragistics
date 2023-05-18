import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewGridComponent } from './newgrid/newgrid.component';

const routes: Routes = [{ path: 'newgrid', component: NewGridComponent, data: { text: 'newGrid' } }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
