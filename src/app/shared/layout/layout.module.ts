import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component'
import { TagInputModule } from 'ngx-chips';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FormComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TagInputModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    FormComponent,

  ],
})
export class LayoutModule { }
