import styled from 'styled-components';

export const MainSection = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const BooksTable = styled.table`
  border: 1px solid black;
  border-collapse: collapse;
  max-width: 80%;
  margin: 5rem 0;
  width: 100%;
`;

export const TableTitle = styled.th`
  background-color: #f4f4f4;
  border: 1px solid #a0a0a0;
  font-size: 1.5vw;
  padding: 10px;
  text-align: left;
`;

export const PagesContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 80%;
  margin-bottom: 20px;
  width: 100%;
`;

export const PageCount = styled.p`
  font-size: 1.5vw;
  margin-bottom: 15px;
`;
