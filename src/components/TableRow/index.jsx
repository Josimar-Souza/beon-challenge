import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import {
  TableRowStyle,
  TableCell,
  BookDetailsText,
} from './tableRowStyles';

function TableRow({ book, index }) {
  const navigate = useNavigate();

  const onDetailsClick = () => {
    navigate(`/books/details/${book.title}`);
  };

  return (
    <TableRowStyle
      data-testid="table-row"
    >
      <TableCell data-testid={`row-title-${index}`}>{book.title}</TableCell>
      <TableCell data-testid={`row-author-${index}`}>{book.author}</TableCell>
      <TableCell data-testid={`row-language-${index}`}>{book.language}</TableCell>
      <TableCell data-testid={`row-year-${index}`}>{book.year}</TableCell>
      <TableCell
        action="true"
      >
        <BookDetailsText
          onClick={onDetailsClick}
          data-testid={`row-details-${index}`}
        >
          Detalhes
        </BookDetailsText>
      </TableCell>
    </TableRowStyle>
  );
}

TableRow.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default TableRow;
