import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResolutionDetailComponent } from './resolution/resolution-detail/resolution-detail.component';
import { ResolutionListComponent } from './resolution/resolution-list/resolution-list.component';
import { CategoryComponent } from './component/category/category.component';
import { ResolutionMaterialModule } from './material-module';

@NgModule({
  declarations: [
    AppComponent,
    ResolutionDetailComponent,
    ResolutionListComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ResolutionMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
