import { Injectable } from '@angular/core';
import { Testimonial } from '../shared/Testimonial.modul';
import { TESTIMONIALS } from '../mock-testimonial';

@Injectable({
  providedIn: 'root',
})
export class TestimonialService {
  constructor() {}

  getTestimonial(): Testimonial[] {
    return TESTIMONIALS;
  }
}
