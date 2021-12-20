import { Component, OnInit, Input } from '@angular/core';
import { Paragraph } from 'src/app/shared/Paragraph.modul';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss'],
})
export class ParagraphComponent implements OnInit {
  @Input() parag: Paragraph = { title: '', paragraph: '' };
  constructor() {}

  ngOnInit(): void {}
}
