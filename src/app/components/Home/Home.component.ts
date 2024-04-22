import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DownloadButtonComponent } from '../ui/download-button/download-button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, DownloadButtonComponent],
  templateUrl: './Home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent
{
  bannerSelection: Array<Array<any>> = [
    ['24P03', 1],
    ['24P03', 7],
    ['24P03', 9],
    ['24P03', 4],
    ['24P03', 11],
    ['24P03', 14],
    ['24P03', 17],
    ['24H02', 6],
    ['24H01', 22],
    ['24P01', 17],
    ['23H01', 7],
    ['23H01', 1],
    ['24H02', 19],
  ];

  randomBanner = this.bannerSelection[Math.floor(Math.random() * this.bannerSelection.length)];
}
