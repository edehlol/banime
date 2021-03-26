import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Result } from './Result';
import { fetchResults } from './searchSlice';

export const ResultsList = ({ query }) => {
  const results = useSelector((state) => state.search.results);
  const fetchStatus = useSelector((state) => state.search.status);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchResults(query));
  }, [dispatch, query]);

  let content;

  if (fetchStatus === 'pending') {
    content = <div>Please wait...</div>;
  } else if (fetchStatus === 'fulfilled') {
    content = results.results.map((result) => <Result key={result.mal_id} result={result} />);
  }
  return <ul className="list-group">{content}</ul>;
};
