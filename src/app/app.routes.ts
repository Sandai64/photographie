import { Routes } from '@angular/router';
import { AlbumsComponent } from './components/Albums/Albums.component';
import { StocksComponent } from './components/Stocks/Stocks.component';
import { NotFoundComponent } from './components/NotFound/NotFound.component';
import { StockDetailsComponent } from './components/StockDetails/StockDetails.component';
import { AlbumDetailsComponent } from './components/AlbumDetails/AlbumDetails.component';
import { HomeComponent } from './components/Home/Home.component';

export const routes: Routes = [
    { path: 'albums', component: AlbumsComponent },
    { path: 'album/:albumID', component: AlbumDetailsComponent },

    { path: 'stocks', component: StocksComponent },
    { path: 'stock/:stockID', component: StockDetailsComponent },

    { path: 'home', component: HomeComponent, pathMatch: 'full' },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent, pathMatch: 'full' },
];
