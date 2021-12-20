import { Component, OnInit } from '@angular/core';
import { TestimonialService } from 'src/app/services/testimonial.service';
import { Testimonial } from 'src/app/shared/Testimonial.modul';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent implements OnInit {
  testimonials: Testimonial[] = [];

  constructor(private testimonialService: TestimonialService) {}

  ngOnInit(): void {
    this.testimonials = this.testimonialService.getTestimonial();
  }
}
