import { Injectable } from '@angular/core';
import { Paragraph } from '../shared/Paragraph.modul';
import { PARAPGRAPHS } from '../mock-paragraph';

@Injectable({
  providedIn: 'root',
})
export class ParagraphService {
  constructor() {}

  getParagraph(): Paragraph[] {
    return PARAPGRAPHS;
  }
}
