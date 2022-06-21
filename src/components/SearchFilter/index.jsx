import React from 'react';
import calendarIcon from '../../icons/calendar.svg';
import {
  FilterContainer,
  FilterText,
  YearFilterContainer,
  FilterInput,
  FilterIcon,
  InputIconContainer,
} from './searchFilterStyles';

function SearchFilter() {
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
    </FilterContainer>
  );
}

export default SearchFilter;
