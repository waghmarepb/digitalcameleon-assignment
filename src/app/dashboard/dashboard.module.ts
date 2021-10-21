import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DefaultComponent } from './default/default.component';
import { ReactiveFormsModule } from '@angular/forms';

import { TagInputModule } from 'ngx-chips';

@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule, TagInputModule
  ]
})
export class DashboardModule { }
