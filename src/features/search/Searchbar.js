import { navigate } from '@reach/router';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { clearResults } from './searchSlice';

export const Searchbar = () => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState('');
  const [searchCategory, setSearchCategory] = useState('Anime');
  const onSearchChange = (e) => {
    setSearchInput(e.target.value);
  };
  const onSearchCategoryChange = (category) => {
    setSearchCategory(category);
  };
  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (searchInput) {
      dispatch(clearResults());
      setSearchInput('');
      navigate(`/search/${searchCategory.toLowerCase()}/${searchInput}`);
    }
  };
  return (
    <form className="input-group" onSubmit={onSearchSubmit}>
      <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
        {searchCategory}
      </button>
      <ul className="dropdown-menu">
        <li className="dropdown-item" onClick={() => onSearchCategoryChange('Anime')}>
          Anime
        </li>
        <li className="dropdown-item" onClick={() => onSearchCategoryChange('Manga')}>
          Manga
        </li>
        <li className="dropdown-item" onClick={() => onSearchCategoryChange('Person')}>
          Person
        </li>
        <li className="dropdown-item" onClick={() => onSearchCategoryChange('Character')}>
          Character
        </li>
      </ul>
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
  );
};
