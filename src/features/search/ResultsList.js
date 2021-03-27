import { navigate } from '@reach/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Result } from './Result';
import { fetchResults } from './searchSlice';

export const ResultsList = ({ category, query }) => {
  const results = useSelector((state) => state.search.results);
  const fetchStatus = useSelector((state) => state.search.status);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchResults({ category, query }));
  }, [dispatch, category, query]);

  const onChangeCategory = (category) => {
    navigate(`/search/${category.toLowerCase()}/${query}`);
  };

  let content;

  if (fetchStatus === 'pending') {
    content = (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  } else if (fetchStatus === 'fulfilled') {
    content = results.results.map((result) => (
      <Result key={result.mal_id} result={result} category={category} />
    ));
  }
  return (
    <div>
      {fetchStatus === 'fulfilled' && (
        <>
          <p className="text-secondary">
            <small>
              Search results for '{query}' - {results.results.length} results
            </small>
          </p>
          <p>
            Jump to: &nbsp;
            <button
              onClick={() => onChangeCategory('anime')}
              className={`btn btn-secondary badge ${
                category === 'anime' ? 'bg-primary' : 'bg-secondary'
              }`}
            >
              Anime
            </button>
            &nbsp;
            <button
              onClick={() => onChangeCategory('manga')}
              className={`btn btn-secondary badge ${
                category === 'manga' ? 'bg-primary' : 'bg-secondary'
              }`}
            >
              Manga
            </button>
            &nbsp;
            <button
              onClick={() => onChangeCategory('person')}
              className={`btn btn-secondary badge ${
                category === 'person' ? 'bg-primary' : 'bg-secondary'
              }`}
            >
              Person
            </button>
            &nbsp;
            <button
              onClick={() => onChangeCategory('character')}
              className={`btn btn-secondary badge ${
                category === 'character' ? 'bg-primary' : 'bg-secondary'
              }`}
            >
              Character
            </button>
          </p>
        </>
      )}

      <ul className="list-group">
        {results && results.results.length === 0 ? (
          <div>Sorry, we couldn't find any results...</div>
        ) : (
          content
        )}
      </ul>
    </div>
  );
};
