import { Component, Input, OnInit } from '@angular/core';
import { Starting } from 'src/app/shared/Starting.modul';

@Component({
  selector: 'app-starting-item',
  templateUrl: './starting-item.component.html',
  styleUrls: ['./starting-item.component.scss'],
})
export class StartingItemComponent implements OnInit {
  @Input() item: Starting = { type: '', id: '', placeholder: '' };
  constructor() {}

  ngOnInit(): void {}
}
