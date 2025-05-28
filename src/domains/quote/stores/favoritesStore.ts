import { makeAutoObservable } from 'mobx';

import { Quote } from '../entities/quote';

export class FavoritesStore {
  favorites: Quote[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  add(quote: Quote) {
    if (!this.isFavorite(quote)) {
      this.favorites.push(quote);
    }
  }

  remove(quote: Quote) {
    this.favorites = this.favorites.filter(item => item.quote !== quote.quote || item.author !== quote.author);
  }

  toggle(quote: Quote) {
    this.isFavorite(quote) ? this.remove(quote) : this.add(quote);
  }

  isFavorite(quote: Quote) {
    return this.favorites.some(
      item => item.quote === quote.quote && item.author === quote.author
    );
  }

  get all() {
    return this.favorites;
  }
}

export const favoritesStore = new FavoritesStore();
