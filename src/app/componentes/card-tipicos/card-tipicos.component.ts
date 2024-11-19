import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-tipicos',
  templateUrl: './card-tipicos.component.html',
  styleUrl: './card-tipicos.component.css',
})
export class CardTipicosComponent {
  @Input() fotoCapa: string = '';
  @Input() cardTitulo: string = '';
  @Input() id: string = '0';
}
