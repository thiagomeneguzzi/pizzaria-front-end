import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinalizeOrderGuard } from './pages/finalize-order/finalize-order.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'finalize-order',
    loadChildren: () => import('./pages/finalize-order/finalize-order.module').then((m) => m.FinalizeOrderModule),
    canLoad: [FinalizeOrderGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
