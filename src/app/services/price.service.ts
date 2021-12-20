import { Injectable } from '@angular/core';
import { Cards } from '../shared/Card.modul';
import { CARDS } from '../mock-card';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor() {}

  getCard(): Cards[] {
    return CARDS;
  }
}
