import { Link, navigate } from '@reach/router';
import React, { useState } from 'react';

export const Navbar = () => {
  const [searchInput, setSearchInput] = useState('');
  const onSearchChange = (e) => {
    setSearchInput(e.target.value);
  };
  const onSearchSubmit = (e) => {
    e.preventDefault();
    console.log(searchInput);
    navigate(`/search/${searchInput}`);
  };
  return (
    <nav className="navbar navbar-dark bg-dark mb-4">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Banime.
        </Link>
        <form className="input-group" onSubmit={onSearchSubmit}>
          <input
            value={searchInput}
            onChange={onSearchChange}
            type="text"
            className="form-control"
            placeholder="Search Anime, Manga, and more... "
          />
          <button type="submit" className="btn btn-secondary">
            <i className="bi bi-search"></i>
          </button>
        </form>
      </div>
    </nav>
  );
};
