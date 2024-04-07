import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AlbumSchema, AlbumsService } from '../../services/albums.service';
import { StocksService } from '../../services/stocks.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: `./Albums.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlbumsComponent
{
  StocksService = StocksService;

  albums: Array<AlbumSchema> = AlbumsService.getAll();
}
