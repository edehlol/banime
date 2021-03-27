import React from 'react';
import { Router } from '@reach/router';

import { AnimeList } from './features/topAnimeList/AnimeList';
import { Navbar } from './app/Navbar';
import { ResultsList } from './features/search/ResultsList';
import { InfoPage } from './features/info/InfoPage';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Router>
          <AnimeList path="/" />
          <InfoPage path="/:category/:id" />
          <ResultsList path="search/:category/:query" />
        </Router>
      </div>
    </>
  );
};

export default App;
