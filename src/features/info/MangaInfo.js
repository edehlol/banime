import React from 'react';

export const MangaInfo = ({ manga }) => {
  return (
    <div className="container mb-4">
      <h1>{manga.title}</h1>
      <div className="row mb-3">
        <div className="col-4">
          <img src={manga.image_url} alt={manga.title} className="img-fluid" />
        </div>
        <div className="col-8">
          <h4>
            <i className="bi bi-star-fill text-warning"></i>
            &nbsp;
            {manga.score}
          </h4>
          <p>
            Ranked: <b>#{manga.rank}</b>
          </p>
          <p>
            Popularity: <b>#{manga.popularity}</b>
          </p>
          <p>
            Members: <b>{manga.members}</b>
          </p>
        </div>
      </div>

      <h5>Synopsis</h5>
      <p>{manga.synopsis}</p>
    </div>
  );
};
