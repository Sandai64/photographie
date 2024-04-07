import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AlbumsService } from '../../services/albums.service';
import { LucideAngularModule } from 'lucide-angular';
import { StocksService } from '../../services/stocks.service';

@Component({
  selector: 'app-album-details',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, RouterLink],
  templateUrl: './AlbumDetails.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlbumDetailsComponent
{
  AlbumsService = AlbumsService;
  StocksService = StocksService;

  private activatedRoute = inject(ActivatedRoute);
  album = AlbumsService.getFromID(this.activatedRoute.snapshot.params['albumID']);
}
