import { Component, Input, OnInit } from '@angular/core';
import { Testimonial } from 'src/app/shared/Testimonial.modul';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
})
export class TestimonialComponent implements OnInit {
  @Input() testi: Testimonial = {
    source: '',
    alt: '',
    userName: '',
    userTitle: '',
    userExp: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
