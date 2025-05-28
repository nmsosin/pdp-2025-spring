import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Stack,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from '@mui/material'
import { useForm, Controller } from 'react-hook-form'
import { favoritesStore } from '@/domains/quote/stores/favoritesStore'
import { quoteStore } from '@/domains/quote/stores/quoteStore'
import { Quote } from '@/domains'

type AddQuoteDialogProps = {
  open: boolean
  onClose: () => void
}

type FormValues = {
  author: string
  quote: string
  bookName: string
  year: string
  genre: string
  sentiment: string
  length: 'короткая' | 'средняя' | 'длинная'
}

export const AddQuoteDialog = ({ open, onClose }: AddQuoteDialogProps) => {
  const { register, handleSubmit, control, reset } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    const newQuote: Quote = {
      id: quoteStore.quotes.length + 1,
      author: data.author,
      quote: data.quote,
      bookName: data.bookName,
      year: Number(data.year),
      genre: data.genre,
      sentiment: data.sentiment,
      length: data.length,
    }

    favoritesStore.add(newQuote);
    quoteStore.addNewQuote(newQuote);
    
    reset()
    onClose()
  }

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Добавить цитату</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <Stack spacing={2}>
            <TextField label="Цитата" {...register('quote')} required fullWidth />
            <TextField label="Автор" {...register('author')} required />
            <TextField label="Книга" {...register('bookName')} required />
            <TextField label="Год" type="number" {...register('year')} required />
            <TextField label="Жанр" {...register('genre')} />
            <TextField label="Настроение" {...register('sentiment')} />

            <FormControl fullWidth required>
              <InputLabel>Длина</InputLabel>
              <Controller
                control={control}
                name="length"
                rules={{ required: true }}
                render={({ field }) => (
                  <Select label="Длина" {...field}>
                    <MenuItem value="короткая">короткая</MenuItem>
                    <MenuItem value="средняя">средняя</MenuItem>
                    <MenuItem value="длинная">длинная</MenuItem>
                  </Select>
                )}
              />
            </FormControl>
          </Stack>
        </DialogContent>

        <DialogActions>
          <Button onClick={onClose}>Отмена</Button>
          <Button type="submit" variant="contained">Добавить</Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}