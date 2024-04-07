import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './NotFound.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent { }
