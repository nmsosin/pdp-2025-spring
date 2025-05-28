import { Button, Container, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';

import { quoteStore } from '@/domains/quote/stores/quoteStore';

import { QuoteFilter, QuoteCard } from '../../components';



export const HomePage = observer(() => {
  const currentQuote = quoteStore.current;

  const handleRandomQuote = () => {
    quoteStore.getRandomQuote();
  };

  return (
    <Container sx={{ py: 4, mx: 'auto', width: 800 }}>
      <Typography variant="h4" gutterBottom>Цитаты классиков на все времена</Typography>
      <QuoteFilter />
      <Button
        variant="contained"
        onClick={handleRandomQuote}
      >
        Случайная цитата
      </Button>
      <QuoteCard quote={currentQuote} />
    </Container>
  );
});
