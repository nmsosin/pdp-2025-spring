export type Quote = {
  id: number;
  author: string;
  quote: string;
  bookName: string;
  year: number;
  genre: string;
  sentiment: string;
  length: 'короткая' | 'средняя' | 'длинная';
};
