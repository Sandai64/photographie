import { Routes } from '@angular/router';
import { AlbumsComponent } from './components/Albums/Albums.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: 'albums', component: AlbumsComponent },
    { path: 'app', component: AppComponent, pathMatch: 'full' },
];
