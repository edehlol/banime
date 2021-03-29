import { Button, IconButton } from '@chakra-ui/button';
import { SearchIcon } from '@chakra-ui/icons';
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
        {/* <Select onChange={onSearchCategoryChange} bg="white" w="48">
          <option value="anime">Anime</option>
          <option value="manga">Manga</option>
          <option value="person">Person</option>
          <option value="character">Character</option>
        </Select> */}
        <InputGroup>
          {' '}
          <Input
            bg="white"
            value={searchInput}
            onChange={onSearchChange}
            placeholder="Search Anime, Manga, and more... "
          />
          <InputRightAddon as={IconButton} icon={<SearchIcon />} />
        </InputGroup>
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
