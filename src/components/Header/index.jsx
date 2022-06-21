import React, { useState } from 'react';
import searchIcon from '../../icons/search.svg';
import {
  HeaderContainer,
  SearchContainer,
  SearchIcon,
  SearchInput,
  BeonLogo,
  SearchButton,
} from './headerStyles';

function Header() {
  const [searchTerm, setSearchTerm] = useState('');

  const onInputChange = ({ target: { value } }) => {
    setSearchTerm(value);
  };
  console.log(searchTerm);
  return (
    <HeaderContainer>
      <BeonLogo>beon</BeonLogo>
      <SearchContainer>
        <SearchIcon src={searchIcon} alt="Icone de busca" />
        <SearchInput
          placeholder="Busque livros pelo título, autor ou idioma"
          onChange={onInputChange}
        />
      </SearchContainer>
      <SearchButton>
        Buscar
      </SearchButton>
    </HeaderContainer>
  );
}

export default Header;
