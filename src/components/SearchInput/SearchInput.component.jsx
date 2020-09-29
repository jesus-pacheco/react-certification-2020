import React, { useState, useEffect } from 'react';

import { SearchContainer, SearchInput, SearchIcon, SearchIconImg } from '../Styled/Input';
import searchIcon from '../../img/search-icon.svg';

export default ({ onSearchChange = () => {} }) => {
  const [searchTerm, setSearchTerm] = useState('Wizeline');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onSearchChange(searchTerm);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [onSearchChange, searchTerm]);

  return (
    <SearchContainer>
      <SearchInput
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <SearchIcon>
        <SearchIconImg src={searchIcon} />
      </SearchIcon>
    </SearchContainer>
  );
};
