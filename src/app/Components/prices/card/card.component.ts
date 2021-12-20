import { Component, Input, OnInit } from '@angular/core';
import { Cards } from 'src/app/shared/Card.modul';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() card: Cards = {
    id: 0,
    detail: {
      cpu: '',
      gpu: '',
      ram: '',
      hard: '',
      boitier: '',
    },
    price: 0,
  };
  cardClassF: string = '';
  cardClassB: string = '';
  constructor() {}

  ngOnInit(): void {
    this.cardClassF = `card__picture card__picture--${this.card.id}`;
    this.cardClassB = `card__side card__side--back card__side--back-${this.card.id}`;
  }
}
