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

function SearchFilter(props) {
  const {
    booksCount,
    onInputChange,
    minYearValue,
    maxYearValue,
  } = props;

  return (
    <FilterContainer>
      <YearFilterContainer>
        <FilterText
          data-testid="filter-paragraph"
        >
          Filtrar ano da publicação:
        </FilterText>
        <InputIconContainer>
          <FilterInput
            type="number"
            name="minYear"
            onChange={onInputChange}
            value={minYearValue}
            data-testid="filter-min-input"
          />
          <FilterIcon src={calendarIcon} alt="Icone de filtro por ano" />
        </InputIconContainer>
        <FilterText>até</FilterText>
        <InputIconContainer>
          <FilterInput type="number" name="maxYear" onChange={onInputChange} value={maxYearValue} />
          <FilterIcon src={calendarIcon} alt="Icone de filtro por ano" />
        </InputIconContainer>
      </YearFilterContainer>
      <FilterText>{ `${booksCount} resultados encontrados` }</FilterText>
    </FilterContainer>
  );
}

SearchFilter.propTypes = {
  booksCount: PropTypes.number.isRequired,
  onInputChange: PropTypes.func.isRequired,
  minYearValue: PropTypes.string.isRequired,
  maxYearValue: PropTypes.string.isRequired,
};

export default SearchFilter;
