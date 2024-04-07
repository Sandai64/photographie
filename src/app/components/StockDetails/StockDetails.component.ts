import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-stock-details',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './StockDetails.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockDetailsComponent { }
