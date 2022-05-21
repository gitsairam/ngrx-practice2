import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { bookReducer } from './state/book.reducer';
import { collectionReducer } from './state/collection.reducer';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule,StoreModule.forRoot({books:bookReducer,collection:collectionReducer})],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
