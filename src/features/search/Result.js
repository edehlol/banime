import React from 'react';
import { Link } from '@reach/router';

export const Result = ({ result }) => {
  return (
    <Link to={`/anime/${result.mal_id}`} className="list-group-item list-group-item-action">
      <div className="row">
        <div className="col-md-2">
          <img className="img-thumbnail" src={result.image_url} alt={result.title} />
        </div>
        <div className="col-md-10">
          <p>{result.title}</p>
        </div>
      </div>
    </Link>
  );
};
