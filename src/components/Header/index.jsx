import React from 'react';
import PropTypes from 'prop-types';
import searchIcon from '../../icons/search.svg';
import {
  HeaderContainer,
  SearchContainer,
  SearchIcon,
  SearchInput,
  BeonLogo,
  SearchButton,
} from './headerStyles';

function Header(props) {
  const {
    onInputChange,
    inputValue,
  } = props;
  return (
    <HeaderContainer>
      <BeonLogo>beon</BeonLogo>
      <SearchContainer>
        <SearchIcon src={searchIcon} alt="Icone de busca" />
        <SearchInput
          placeholder="Busque livros pelo título, autor ou idioma"
          onChange={onInputChange}
          value={inputValue}
        />
      </SearchContainer>
      <SearchButton>
        Buscar
      </SearchButton>
    </HeaderContainer>
  );
}

Header.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};

export default Header;
