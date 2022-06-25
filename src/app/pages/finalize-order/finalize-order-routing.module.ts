import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinalizeOrderComponent } from './finalize-order.component';

const routes: Routes = [
  {
    path: '',
    component: FinalizeOrderComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinalizeOrderRoutingModule { }