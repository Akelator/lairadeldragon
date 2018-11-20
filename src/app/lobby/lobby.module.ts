import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LandingPageComponent,
  ],
  exports: [
    LandingPageComponent,
  ]
})
export class LobbyModule { }
