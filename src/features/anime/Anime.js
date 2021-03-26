import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnime } from './animeSlice';

export const Anime = ({ animeId }) => {
  const fetchStatus = useSelector((state) => state.anime.status);
  const anime = useSelector((state) => state.anime.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAnime(animeId));
  }, [animeId, dispatch, fetchStatus]);
  return (
    <div>
      <h1>{anime.title}</h1>
      <div className="row mb-3">
        <div className="col-4">
          <img src={anime.image_url} alt={anime.title} className="img-fluid" />
        </div>
        <div className="col-8">
          <h4>
            <i className="bi bi-star-fill text-warning"></i>
            {anime.score}
          </h4>
          <p>
            Ranked: <b>#{anime.rank}</b>
          </p>
          <p>
            Popularity: <b>#{anime.popularity}</b>
          </p>
          <p>
            Members: <b>{anime.members}</b>
          </p>
        </div>
      </div>

      <h5>Synopsis</h5>
      <p>{anime.synopsis}</p>
      <h5>Trailer</h5>
      <iframe
        width="560"
        height="315"
        src={anime.trailer_url}
        title="Trailer"
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};
