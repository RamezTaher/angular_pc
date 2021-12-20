import { Component, Input, OnInit } from '@angular/core';
import { Features } from 'src/app/shared/Features.modul';

@Component({
  selector: 'app-feature-item',
  templateUrl: './feature-item.component.html',
  styleUrls: ['./feature-item.component.scss'],
})
export class FeatureItemComponent implements OnInit {
  @Input() feature: Features = { icon: '', title: '', paragraph: '' };
  iconName: string = '';

  constructor() {}

  ngOnInit(): void {
    this.iconName = `feature-box__icon fa-solid fa-${this.feature.icon}`;
    console.log(this.iconName);
  }
}
