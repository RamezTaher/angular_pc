import { Injectable } from '@angular/core';
import { Features } from '../shared/Features.modul';
import { FEATURES } from '../mock-features';

@Injectable({
  providedIn: 'root',
})
export class FeatureService {
  constructor() {}

  getFeatures(): Features[] {
    return FEATURES;
  }
}
