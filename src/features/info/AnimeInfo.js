import React from 'react';

export const AnimeInfo = ({ anime }) => {
  return (
    <>
      <h5 className="bg-light py-2 px-2 text-center">{anime.title}</h5>
      <div className="container mb-4">
        <div className="row mb-3">
          <div className="col-5">
            <img src={anime.image_url} alt={anime.title} className="img-fluid" />
          </div>
          <div className="col-7">
            <h5 className="mb-0">
              <i className="bi bi-star-fill text-warning"></i>
              &nbsp;
              {anime.score}
              <small className="text-secondary fw-light">({anime.members} users)</small>
            </h5>
            <p>
              Ranked: <b>#{anime.rank}</b>
            </p>
            <p>
              {anime.type} ({anime.episodes}eps)
            </p>
            <p className="mb-0">
              <small className="text-secondary">Aired</small>
            </p>
            <p>{anime.aired ? anime.aired.from : null}</p>
            <p className="mb-0">
              <small className="text-secondary">Studios</small>
            </p>
            <p>{anime.studios[0].name}</p>
          </div>
          <h5>Synopsis</h5>
          <p>{anime.synopsis}</p>
          <h5>Background</h5>
          <p>{anime.background}</p>
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
      </div>
    </>
  );
};
