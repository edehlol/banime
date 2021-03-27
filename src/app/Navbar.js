import { Link } from '@reach/router';
import React from 'react';
import { Searchbar } from '../features/search/Searchbar';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark mb-4">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Banime.
        </Link>
        <Searchbar />
      </div>
    </nav>
  );
};
