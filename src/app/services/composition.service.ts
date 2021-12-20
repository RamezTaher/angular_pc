import { Injectable } from '@angular/core';
import { Composition } from '../shared/Composition.modul';
import { COMPOSITIONS } from '../mock-composition';

@Injectable({
  providedIn: 'root',
})
export class CompositionService {
  constructor() {}

  getComposition(): Composition[] {
    return COMPOSITIONS;
  }
}
