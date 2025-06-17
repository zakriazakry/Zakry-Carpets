import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/modules-routing.module').then(
        (m) => m.ModulesRoutingModule
      ),
  },
];
