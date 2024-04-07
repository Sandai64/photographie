import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StocksService } from './services/stocks.service';
import { AlbumsService } from './services/albums.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
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
