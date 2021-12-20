import { Component, OnInit } from '@angular/core';

import { Features } from 'src/app/shared/Features.modul';

import { FeatureService } from 'src/app/services/feature.service';
@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent implements OnInit {
  features: Features[] = [];
  constructor(private featureService: FeatureService) {}

  ngOnInit(): void {
    this.features = this.featureService.getFeatures();
  }
}
