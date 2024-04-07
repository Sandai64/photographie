import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StockSchema, StocksService } from '../../services/stocks.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-stocks',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './Stocks.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StocksComponent
{
  stocks: Array<StockSchema> = StocksService.getAll();
}
