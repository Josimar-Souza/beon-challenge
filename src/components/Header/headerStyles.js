import styled from 'styled-components';

export const HeaderContainer = styled.section`
  align-items: center;
  background-color: #e5e5e5;
  display: flex;
  justify-content: space-around;
  min-height: 100px;
  padding: 10px;
  width: 100%;
`;

export const SearchContainer = styled.div`
  align-items: center;
  background-color: white;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  max-width: 65%;
  padding: 10px;
  width: 100%;
`;

export const SearchIcon = styled.img`
  margin-right: 15px;
  max-width: 3.5%;
  width: 100%;
`;

export const SearchInput = styled.input`
  border: none;
  font-size: 1.5vw;
  max-width: 90%;
  padding: 5px;
  width: 100%;
  
  :focus {
    outline: none;
  }
`;

export const BeonLogo = styled.h1`
  color: #a443bc;
  font-size: 4vw;
  font-family: 'Montserrat', sans-serif;
`;

export const SearchButton = styled.button`
  font-size: 2.3vw;
  max-width: 15%;
  padding: 5px;
  width: 100%;
  
  :hover {
    cursor: pointer;
  }
`;
