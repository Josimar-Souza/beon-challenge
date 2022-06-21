import React from 'react';
import PropTypes from 'prop-types';
import calendarIcon from '../../icons/calendar.svg';
import {
  FilterContainer,
  FilterText,
  YearFilterContainer,
  FilterInput,
  FilterIcon,
  InputIconContainer,
} from './searchFilterStyles';

function SearchFilter({ booksCount }) {
  return (
    <FilterContainer>
      <YearFilterContainer>
        <FilterText>Filtrar ano da publicação:</FilterText>
        <InputIconContainer>
          <FilterInput type="number" />
          <FilterIcon src={calendarIcon} alt="Icone de filtro por ano" />
        </InputIconContainer>
        <FilterText>até</FilterText>
        <InputIconContainer>
          <FilterInput type="number" />
          <FilterIcon src={calendarIcon} alt="Icone de filtro por ano" />
        </InputIconContainer>
      </YearFilterContainer>
      <FilterText>{ `${booksCount} resultados encontrados` }</FilterText>
    </FilterContainer>
  );
}

SearchFilter.propTypes = {
  booksCount: PropTypes.number.isRequired,
};

export default SearchFilter;
