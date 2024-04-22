import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { AlbumSchema } from '../../../services/albums.service';

@Component({
  selector: 'app-download-button',
  standalone: true,
  imports: [
    CommonModule, LucideAngularModule
  ],
  templateUrl: './download-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DownloadButtonComponent
{
  @Input() albumID?: string;
  @Input() index?  : number;
}
