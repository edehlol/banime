import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchReviews } from '../anime/animeSlice';

export const Reviews = ({ type, id }) => {
  console.log(type, id);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchReviews({ type, id, page }));
  }, [dispatch, id, type, page]);
  return (
    <div>
      <h1>reviews tbd</h1>
    </div>
  );
};
