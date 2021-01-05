import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Material modules
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';

import { TrackingRoutingModule } from './tracking-routing.module';
import { SearchComponent } from './components/search/search.component';
import { DetailsComponent } from './components/details/details.component';


@NgModule({
  declarations: [SearchComponent, DetailsComponent],
  imports: [
    CommonModule,
    TrackingRoutingModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule
  ]
})
export class TrackingModule { }
