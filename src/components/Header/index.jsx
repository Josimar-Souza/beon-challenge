import React from 'react';
import searchIcon from '../../icons/search.svg';
import {
  HeaderContainer,
  SearchContainer,
  SearchIcon,
  SearchInput,
} from './headerStyles';

function Header() {
  return (
    <HeaderContainer>
      <SearchContainer>
        <SearchIcon src={searchIcon} alt="Icone de busca" />
        <SearchInput
          placeholder="Busque livros pelo título, autor ou idioma"
        />
      </SearchContainer>
    </HeaderContainer>
  );
}

export default Header;
