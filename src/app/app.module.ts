import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResolutionDetailComponent } from './resolution/resolution-detail/resolution-detail.component';
import { ResolutionListComponent } from './resolution/resolution-list/resolution-list.component';
import { CategoryComponent } from './component/category/category.component';
import { ResolutionMaterialModule } from './material-module';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { ResolutionFormComponent } from './resolution/resolution-form/resolution-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ResolutionDetailComponent,
    ResolutionListComponent,
    CategoryComponent,
    ResolutionFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ResolutionMaterialModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ResolutionFormComponent]
})
export class AppModule { }
