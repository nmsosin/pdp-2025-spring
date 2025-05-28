import { Container, Typography, Button, Stack } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { favoritesStore } from '@/domains';
import { AddQuoteDialog, QuoteCard } from '@/ui/components';


export const FavoritesPage = observer(() => {
  const favorites = favoritesStore.favorites;
  const navigate = useNavigate();

  const [addQuoteModalOpen, setAddQuoteModalOpen] = useState(false);

  const handleAddQuote = () => {
    setAddQuoteModalOpen(true);
  };

  const closeQuoteModal = () => {
    setAddQuoteModalOpen(false);
  };

  return (
    <>
      <Container sx={{ py: 4 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h4">Избранные цитаты</Typography>
          <Button variant="contained" onClick={handleAddQuote}>
            + Добавить цитату
          </Button>
        </Stack>

        {favorites.length === 0 ? (
          <Typography color="text.secondary">Пока нет избранных цитат</Typography>
        ) : (
          <Stack spacing={2}>
            {favorites.map((quote) => (
              <QuoteCard key={quote.id} quote={quote} />
            ))}
          </Stack>
        )}

        <Button onClick={() => navigate('/')} sx={{ mt: 4 }}>
          ← Назад
        </Button>
      </Container>
      
      <AddQuoteDialog open={addQuoteModalOpen} onClose={closeQuoteModal} />
    </>
  );
});
