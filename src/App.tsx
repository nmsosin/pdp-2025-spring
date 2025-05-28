import { AppBar, Toolbar, Button } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { FavoritesPage, HomePage } from '@/ui/pages';

import Feather from './assets/icons/feather.png';


export const App = observer(() => {
  return (
    <Router>
      <AppBar position="static" sx={{ p: 2 }}>
        <Toolbar>
          <img src={Feather} alt="Логотип"  width={64} />
          <Button color="inherit" component={Link} to="/" sx={{ ml: 5 }}>Главная</Button>
          <Button color="inherit" component={Link} to="/favorites">Избранное</Button>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Router>
  );
});
