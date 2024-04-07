import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AlbumSchema, AlbumsService } from '../../services/albums.service';
import { StocksService } from '../../services/stocks.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './Home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent
{
  AlbumsService = AlbumsService;
  StocksService = StocksService;

  albums: Array<AlbumSchema> = AlbumsService.getAll();
}
