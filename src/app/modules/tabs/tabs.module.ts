import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { LibraryPage } from './pages/library/library.page';
import { SearchPage } from './pages/search/search.page';
import { HomePage } from './pages/home/home.page';
import { AlbumPage } from './pages/album/album.page';

@NgModule({
  declarations: [
    TabsPage,
    HomePage,
    SearchPage,
    LibraryPage,
    AlbumPage
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule
  ]
})
export class TabsPageModule {}
