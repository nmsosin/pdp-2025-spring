import React from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Container, Typography } from '@mui/material';
import { CounterStore } from './store/CounterStore';

const store = new CounterStore();

export const App = observer(() => {
  return (
    <Container>
      <Typography variant="h4">Counter: {store.count}</Typography>
      <Button variant="contained" color="primary" onClick={() => store.increment()}>
        Increment
      </Button>
    </Container>
  );
});
