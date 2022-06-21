import React from 'react';
import searchIcon from '../../icons/search.svg';
import {
  HeaderContainer,
  SearchContainer,
  SearchIcon,
} from './headerStyles';

function Header() {
  return (
    <HeaderContainer>
      <SearchContainer>
        <SearchIcon src={searchIcon} alt="Icone de busca" />
      </SearchContainer>
    </HeaderContainer>
  );
}

export default Header;
