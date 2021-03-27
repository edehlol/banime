import React from 'react';

export const AnimeInfo = ({ anime }) => {
  return (
    <div className="container mb-4">
      <h1>{anime.title}</h1>
      <div className="row mb-3">
        <div className="col-4">
          <img src={anime.image_url} alt={anime.title} className="img-fluid" />
        </div>
        <div className="col-8">
          <h4>
            <i className="bi bi-star-fill text-warning"></i>
            &nbsp;
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
      <div className="ratio ratio-16x9">
        <iframe
          src={anime.trailer_url}
          title="Trailer"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
