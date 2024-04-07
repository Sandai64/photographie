import { Injectable } from '@angular/core';
import Stocks from './stocks.json';

export interface StockSchema
{
  id  : string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class StocksService
{
  public static getAll() : Array<StockSchema> { return Stocks; }
  public static getFromID(id: string) : StockSchema | undefined { return Stocks.find(e => e.id === id); }
}
