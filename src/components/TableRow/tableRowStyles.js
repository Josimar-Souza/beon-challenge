import styled from 'styled-components';

const getTextAlign = ({ action }) => {
  if (action === 'true') return 'center';

  return 'left';
};

export const TableRowStyle = styled.tr`
  border: 1px solid #a0a0a0;
`;

export const TableCell = styled.td`
  border: 1px solid #a0a0a0;
  font-size: 1.1vw;
  font-weight: 700;
  padding: 10px;
  text-align: ${getTextAlign}
`;

export const BookDetailsText = styled.p`
  color: #10b7ea;
  text-decoration: underline;
  
  :hover {
    cursor: pointer;
  }
`;
