import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Card, CardContent, Typography, Box, Chip, IconButton } from '@mui/material';
import { observer } from 'mobx-react-lite';

import { Quote } from '@/domains';
import { favoritesStore } from '@/domains/quote/stores/favoritesStore';


export const QuoteCard = observer((({ quote: currentQuote }: { quote: Quote | null }) => {
  if (!currentQuote) {
    return null;
  }
  
  const isFavourite = favoritesStore.isFavorite(currentQuote);

  const handleToggleFavorite = () => {
    favoritesStore.toggle(currentQuote);
  };

  return (
    <Card sx={{ maxWidth: 800, mt: 4, mx: 'auto', position: 'relative', paddingBottom: 6 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>« {currentQuote.quote} »</Typography>
        
        <Typography variant="body2" color="text.secondary">
          — {currentQuote.author}, <i>{currentQuote.bookName}</i> ({currentQuote.year})
        </Typography>

        <Typography variant="caption" display="block" sx={{ mt: 4 }} gutterBottom>
          <strong>Жанр:</strong> <i>{currentQuote.genre}</i>
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          <strong>Длина:</strong> <i>{currentQuote.length}</i>
        </Typography>
      </CardContent>

      <Box
        sx={{
          position: 'absolute',
          bottom: 8,
          left: 12,
          right: 12,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Chip
          label={currentQuote.sentiment}
          color="secondary"
          variant="outlined"
          size="small"
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2 }}>
          <Typography
            variant="body2"
            sx={{ fontWeight: 'bold', color: 'text.disabled' }}
          >
            #{currentQuote.id}
          </Typography>

          <IconButton onClick={handleToggleFavorite} color="warning">
            {isFavourite ? <StarIcon /> : <StarBorderIcon />}
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
}));
