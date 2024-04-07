import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { StocksService } from './services/stocks.service';
import { AlbumsService } from './services/albums.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent
{
  StocksService = StocksService;
  AlbumsService = AlbumsService;

  stocks = StocksService.getAll();
  albums = AlbumsService.getAll();
}
