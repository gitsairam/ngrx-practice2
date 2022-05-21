import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { bookReducer } from './state/book.reducer';
import { collectionReducer } from './state/collection.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { BookEffects } from './state/book.effects';
import { BookListComponent } from './book-list/book-list.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot({ books: bookReducer, collection: collectionReducer }),
    EffectsModule.forRoot([BookEffects]),
    HttpClientModule,
  ],
  declarations: [AppComponent, BookListComponent, BookCollectionComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
