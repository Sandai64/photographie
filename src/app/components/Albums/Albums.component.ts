import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: `./Albums.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlbumsComponent { }
