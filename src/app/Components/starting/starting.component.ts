import { Component, OnInit } from '@angular/core';
import { STARTINGS } from 'src/app/mock-starting';
import { Starting } from 'src/app/shared/Starting.modul';

@Component({
  selector: 'app-starting',
  templateUrl: './starting.component.html',
  styleUrls: ['./starting.component.scss'],
})
export class StartingComponent implements OnInit {
  startingItems: Starting[] = STARTINGS;

  constructor() {}

  ngOnInit(): void {}
}
