import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { observer } from 'mobx-react-lite';

import { quoteStore } from '@/domains/quote/stores/quoteStore';

export const QuoteFilter = observer(() => {
  const { sizes, genres, sentiments, filters, setFilter } = quoteStore;

  const handleGenreChange = (e: SelectChangeEvent) => {
  setFilter('genre', e.target.value);
};

const handleLengthChange = (e: SelectChangeEvent) => {
  setFilter('length', e.target.value);
};

const handleSentimentChange = (e: SelectChangeEvent) => {
  setFilter('sentiment', e.target.value);
};

  return (
    <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
      <FormControl>
        <InputLabel>Жанр</InputLabel>
        <Select
          value={filters.genre}
          onChange={handleGenreChange}
          label="Жанр"
          style={{ minWidth: 150 }}
        >
          <MenuItem value="">Любой</MenuItem>
          {genres.map(genre => (
            <MenuItem key={genre} value={genre}>
              {genre}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel>Длина</InputLabel>
        <Select
          value={filters.length}
          onChange={handleLengthChange}
          label="Длина"
          style={{ minWidth: 150 }}
        >
          <MenuItem value="">Любая</MenuItem>
          {sizes.map(size => (
            <MenuItem key={size} value={size}>
              {size}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel>Настроение</InputLabel>
        <Select
          value={filters.sentiment}
          onChange={handleSentimentChange}
          label="Настроение"
          style={{ minWidth: 150 }}
        >
          <MenuItem value="">Любое</MenuItem>
          {sentiments.map(sentiment => (
            <MenuItem key={sentiment} value={sentiment}>
              {sentiment}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
});
