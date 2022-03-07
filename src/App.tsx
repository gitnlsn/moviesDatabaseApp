import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from './pages/Header';
import { DetailedMoviePage } from './pages/DetailedMoviePage';
import { HomePage } from './pages/HomePage';
import { SearchPage } from './pages/SearchPage';
import { GlobalStyle } from './pages/styles/GlobalStyle';

const App: React.FC = () => {

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />

        <Switch>
          <Route path='/search'>
            <SearchPage />
          </Route>
          <Route path='/details'>
            <DetailedMoviePage />
          </Route>
          <Route path='/'>
            <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
