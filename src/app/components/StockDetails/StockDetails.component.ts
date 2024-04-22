import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { StocksService } from '../../services/stocks.service';
import { AlbumSchema, AlbumsService } from '../../services/albums.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { DownloadButtonComponent } from '../ui/download-button/download-button.component';

@Component({
  selector: 'app-stock-details',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, RouterLink, DownloadButtonComponent],
  templateUrl: './StockDetails.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockDetailsComponent
{
  AlbumsService = AlbumsService;
  StocksService = StocksService;

  private activatedRoute = inject(ActivatedRoute);
  stock = StocksService.getFromID(this.activatedRoute.snapshot.params['stockID']);
  albums : Array<AlbumSchema> | null = null;

  ngOnInit() : void
  {
    if (!this.stock) { return; }
    this.albums = AlbumsService.getAll().filter(e => e.stockID === this.stock!.id);
  }
}
