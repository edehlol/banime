import React from 'react';
import { Link } from '@reach/router';

export const Result = ({ result, category }) => {
  return (
    <Link to={`/${category}/${result.mal_id}`} className="list-group-item list-group-item-action">
      <div className="row">
        <div className="col-md-2">
          <img className="img-thumbnail" src={result.image_url} alt={result.title} />
        </div>
        <div className="col-md-10">
          <h6>{result.title}</h6>
          <small>
            {result.type} - {result.episodes}eps
          </small>
          <p className="mb-0">
            <small>Scored {result.score}</small>
          </p>
          <p>
            <small>{result.members} members</small>
          </p>
        </div>
      </div>
    </Link>
  );
};
