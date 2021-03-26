import React from 'react';
import { Router } from '@reach/router';

import { AnimeList } from './features/topAnimeList/AnimeList';
import { SingleAnimePage } from './features/topAnimeList/SingleAnimePage';
import { Navbar } from './app/Navbar';
import { Anime } from './features/anime/Anime';
import { ResultsList } from './features/search/ResultsList';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Router>
          <AnimeList path="/" />
          <Anime path="/anime/:animeId" />
          <ResultsList path="search/:query" />
        </Router>
      </div>
    </>
  );
};

export default App;
