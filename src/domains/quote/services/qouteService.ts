import { quotes } from '@/mocks/quotes';

import { Quote } from '../entities/quote';




export const quoteService = {
  getAll: (): Quote[] => quotes,
};