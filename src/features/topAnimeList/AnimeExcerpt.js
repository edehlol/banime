import React from 'react';
import { Link } from '@reach/router';

export const AnimeExcerpt = ({ anime }) => {
  return (
    <div className="list-group-item list-group-item-action">
      <div className="row ">
        <div className="col-md-1 d-flex align-items-center justify-content-center">
          <p className="fs-5 text-secondary">
            <b>#{anime.rank}</b>
          </p>
        </div>
        <div className="col-md-2">
          <img src={anime.image_url} alt={anime.title} className="img-thumbnail" />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <Link to={`/anime/${anime.mal_id}`}>{anime.title}</Link>
            <p>{`${anime.type} ${anime.episodes ? `(${anime.episodes}eps)` : ''}`}</p>
            <p>{`${anime.start_date} - ${anime.end_date ? anime.end_date : ''}`}</p>
          </div>
        </div>
        <div className="col-md-2 d-flex align-items-center justify-content-center">
          <p>
            <i className="bi bi-star-fill text-warning"></i>
            {anime.score}/10
          </p>
        </div>
      </div>
    </div>
  );
};
