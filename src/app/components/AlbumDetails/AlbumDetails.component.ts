import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-album-details',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './AlbumDetails.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlbumDetailsComponent { }
