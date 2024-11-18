import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-central',
  templateUrl: './card-central.component.html',
  styleUrl: './card-central.component.css',
})
export class CardCentralComponent {
  @Input() fotoCapa: string = '';
  @Input() cardtitulo: string = '';
  @Input() cardDescricao: string = '';
}
