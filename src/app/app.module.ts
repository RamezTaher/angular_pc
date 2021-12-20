import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { ButtonComponent } from './Components/button/button.component';
import { NavBtnComponent } from './Components/nav-btn/nav-btn.component';
import { AboutComponent } from './Components/about/about.component';
import { TitleComponent } from './Components/title/title.component';
import { ParagraphComponent } from './Components/paragraph/paragraph.component';
import { ButtonTextComponent } from './Components/button-text/button-text.component';
import { CompositionComponent } from './Components/composition/composition.component';
import { FeaturesComponent } from './Components/features/features.component';
import { FeatureItemComponent } from './Components/features/feature-item/feature-item.component';
import { PricesComponent } from './Components/prices/prices.component';
import { CardComponent } from './Components/prices/card/card.component';
import { TestimonialsComponent } from './Components/testimonials/testimonials.component';
import { TestimonialComponent } from './Components/testimonials/testimonial/testimonial.component';
import { StartingComponent } from './Components/starting/starting.component';
import { StartingItemComponent } from './Components/starting/starting-item/starting-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    NavBtnComponent,
    AboutComponent,
    TitleComponent,
    ParagraphComponent,
    ButtonTextComponent,
    CompositionComponent,
    FeaturesComponent,
    FeatureItemComponent,
    PricesComponent,
    CardComponent,
    TestimonialsComponent,
    TestimonialComponent,
    StartingComponent,
    StartingItemComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
