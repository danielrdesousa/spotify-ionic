import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

import { HomePage } from './pages/home/home.page';
import { SearchPage } from './pages/search/search.page';
import { LibraryPage } from './pages/library/library.page';
import { AlbumPage } from './pages/album/album.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tabs',
        component: TabsPage
      },
      {
        path: 'home',
        component: HomePage
      },
      {
        path: 'search',
        component: SearchPage
      },
      {
        path: 'library',
        component: LibraryPage
      },
      {
        path: 'album',
        component: AlbumPage
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
