import { Routes } from '@angular/router';
import { AlbumsComponent } from './components/Albums/Albums.component';
import { StocksComponent } from './components/Stocks/Stocks.component';
import { NotFoundComponent } from './components/NotFound/NotFound.component';

export const routes: Routes = [
    { path: 'albums', component: AlbumsComponent },
    { path: 'stocks', component: StocksComponent },
    { path: '**', component: NotFoundComponent, pathMatch: 'full' },
];
