import { Component, OnInit } from '@angular/core';

import { Paragraph } from 'src/app/shared/Paragraph.modul';
import { Composition } from 'src/app/shared/Composition.modul';

import { ParagraphService } from 'src/app/services/paragraph.service';
import { CompositionService } from 'src/app/services/composition.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [],
})
export class AboutComponent implements OnInit {
  paragraphs: Paragraph[] = [];
  compositions: Composition[] = [];

  constructor(
    private paragraphService: ParagraphService,
    private compositionService: CompositionService
  ) {}

  ngOnInit(): void {
    this.paragraphs = this.paragraphService.getParagraph();
    this.compositions = this.compositionService.getComposition();
  }
}
