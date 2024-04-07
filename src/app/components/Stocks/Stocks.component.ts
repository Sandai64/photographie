import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-stocks',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './Stocks.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StocksComponent { }
