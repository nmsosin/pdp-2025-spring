import { makeAutoObservable } from 'mobx';
import { Quote } from '../entities/quote';
import { quoteService } from '../services/qouteService';

export class QuoteStore {
  quotes: Quote[] = []
  filtered: Quote[] = []
  current: Quote | null = null
  filters = {
    genre: '',
    length: '',
    sentiment: '',
  }

  constructor() {
    makeAutoObservable(this)
    this.quotes = quoteService.getAll()
  }

  setFilter<K extends keyof typeof this.filters>(key: K, value: string) {
    this.filters[key] = value
  }

  get genres() {
    return [...new Set(this.quotes.map(item => item.genre))]
  }

  get sizes() {
    return [...new Set(this.quotes.map(item => item.length))]
  }

  get sentiments() {
    return [...new Set(this.quotes.map(item => item.sentiment))]
  }

  addNewQuote(newQuote: Quote) {
    this.quotes.push(newQuote)
  }

  applyFilters() {
    this.filtered = this.quotes.filter(item => {
      const { genre, length, sentiment} = this.filters
      
      return (!genre || item.genre === genre) 
        && (!length || item.length === length)
        && (!sentiment || item.sentiment === sentiment)
    })
  }

  getRandomQuote() {
    this.applyFilters()

    const list = this.filtered.length ? this.filtered : this.quotes

    const randomIndex = Math.floor(Math.random() * list.length)
    this.current = list[randomIndex]
  }
}

export const quoteStore = new QuoteStore()