import styled from 'styled-components';

const SearchContainer = styled.div`
  position: relative;
  width: 350px;
`;

const SearchInput = styled.input`
  padding-left: 0.4em;
  padding-right: 2em;
  border-width: 1px;
  border-style: solid;
  border-radius: 0.5em;
  border-color: #7b8896;
  outline: 0;
  font-size: 1em;
  text-align: left;
  width: calc(350px - 2.4em);
  margin: 0 0.4em;
  height: 30px;
`;

const SearchIcon = styled.span`
  pointer-events: none;
  position: absolute;
  top: 6px;
  right: 0;
  height: 20px;
  width: 1.5em;
`;

const SearchIconImg = styled.img`
  position: relative;
  display: inline-flex;
  height: 15px;
`;

export { SearchContainer, SearchInput, SearchIcon, SearchIconImg };
