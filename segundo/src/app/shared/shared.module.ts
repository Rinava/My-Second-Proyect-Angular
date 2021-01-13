import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HighlightDirective,
    FooterComponent,
    HeaderComponent,
    ExponentialPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  exports: [ // permite que sean utilizados por otros componentes despues
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }

