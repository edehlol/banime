import { Button } from '@chakra-ui/button';
import { Input, InputGroup, InputRightAddon } from '@chakra-ui/input';
import { Flex } from '@chakra-ui/layout';
import { Select } from '@chakra-ui/select';
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
  const onSearchCategoryChange = (e) => {
    setSearchCategory(e.target.value);
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
    <form onSubmit={onSearchSubmit}>
      <Flex>
        <Select onChange={onSearchCategoryChange}>
          <option value="anime">Anime</option>
          <option value="manga">Manga</option>
          <option value="person">Person</option>
          <option value="character">Character</option>
        </Select>
        <Input
          value={searchInput}
          onChange={onSearchChange}
          placeholder="Search Anime, Manga, and more... "
        />
      </Flex>

      {/* <input
        value={searchInput}
        onChange={onSearchChange}
        type="text"
        className="form-control"
        placeholder="Search Anime, Manga, and more... "
      /> */}
      {/* <button type="submit" className="btn btn-secondary">
        <i className="bi bi-search"></i>
      </button> */}
    </form>
  );
};
