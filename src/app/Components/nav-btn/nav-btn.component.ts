import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-btn',
  templateUrl: './nav-btn.component.html',
  styles: [],
})
export class NavBtnComponent implements OnInit {
  isChecked: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  onToggle() {
    this.isChecked = !this.isChecked;
  }
}
