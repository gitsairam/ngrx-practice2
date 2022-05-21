import { createReducer, on } from '@ngrx/store';
import { retrievedBookList } from './book.actions';
import { Book } from '../book-list/book.model';

export const initialState: ReadonlyArray<Book> = [];

export const bookReducer = createReducer(
  initialState,
  on(retrievedBookList, (state, { books }) => books)
);
