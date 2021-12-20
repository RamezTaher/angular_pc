import { Component, Input, OnInit } from '@angular/core';
import { Composition } from 'src/app/shared/Composition.modul';

@Component({
  selector: 'app-composition',
  templateUrl: './composition.component.html',
  styleUrls: ['./composition.component.scss'],
})
export class CompositionComponent implements OnInit {
  @Input() compo: Composition = { source: '', alternative: '', id: 0 };
  compoClass: string = '';

  constructor() {}

  ngOnInit(): void {
    this.compoClass = `composition__photo composition__photo--p${this.compo.id}`;
  }
}
