import { Component, OnInit } from '@angular/core';
import { Cards } from 'src/app/shared/Card.modul';

import { CardService } from 'src/app/services/price.service';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss'],
})
export class PricesComponent implements OnInit {
  cards: Cards[] = [];
  constructor(private cardSercice: CardService) {}

  ngOnInit(): void {
    this.cards = this.cardSercice.getCard();
  }
}
