import React, { useState, useEffect } from 'react';

import { SearchContainer, SearchInput, SearchIcon, SearchIconImg } from '../Styled/Input';
import searchIcon from '../../img/search-icon.svg';

export default ({ value = '', onSearchChange = () => {} }) => {
  const [searchTerm, setSearchTerm] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onSearchChange(searchTerm);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [onSearchChange, searchTerm]);

  return (
    <SearchContainer data-testid="search-input-container">
      <SearchInput
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        data-testid="search-input"
      />
      <SearchIcon>
        <SearchIconImg src={searchIcon} />
      </SearchIcon>
    </SearchContainer>
  );
};
