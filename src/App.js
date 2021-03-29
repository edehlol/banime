import React from 'react';
import { Router } from '@reach/router';

import { AnimeList } from './features/topAnimeList/AnimeList';
import { Navbar } from './app/Navbar';
import { ResultsList } from './features/search/ResultsList';
// import { InfoPage } from './features/info/InfoPage';
import { Anime } from './features/anime/';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <Router>
          <AnimeList path="/" />
          {/* <InfoPage path="/:category/:id" /> */}
          <Anime path="/anime/:animeId" />
          <ResultsList path="search/:category/:query" />
        </Router>
      </div>
    </>
  );
};

export default App;
