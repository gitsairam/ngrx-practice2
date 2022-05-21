import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { GoogleBooksService } from '../book-list/book.service';
import { startFetch, retrievedBookList } from './book.actions';

@Injectable()
export class BookEffects {
  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(startFetch),
      mergeMap(() =>
        this.bookService.getBooks().pipe(
          map((books) => retrievedBookList({ books })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private bookService: GoogleBooksService
  ) {}
}
