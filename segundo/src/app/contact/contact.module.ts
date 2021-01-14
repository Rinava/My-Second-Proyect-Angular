import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './components/contact/contact.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, SharedModule, MaterialModule, ContactRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ContactModule {}
