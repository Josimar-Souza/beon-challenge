import styled from 'styled-components';

export const FilterContainer = styled.div`
  align-items: center;
  background-color: #e5e5e5;
  border: 1px solid black;
  display: flex;
  min-height: 100px;
  padding: 10px;
  width: 100%;
`;

export const FilterText = styled.p`
  display: inline-block;
  font-size: 1vw;
`;

export const YearFilterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 40%;
  width: 100%;
`;

export const FilterInput = styled.input`
  margin-left: 10px;
  width: 50%;
`;

export const FilterIcon = styled.img`
  margin-left: 5px;
`;

export const InputIconContainer = styled.div`
  align-items: center;
  display: flex;
`;
