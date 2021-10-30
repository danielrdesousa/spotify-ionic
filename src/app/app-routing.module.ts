import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';

import { TabsPage } from './modules/tabs/tabs.page';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'tabs',
        component: LayoutComponent,
        loadChildren: () => import('./modules/tabs/tabs.module').then(m => m.TabsPageModule)
      },
      {
        path: '',
        redirectTo: 'tabs',
        pathMatch: 'full'
      },
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
