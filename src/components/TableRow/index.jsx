import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import {
  TableRowStyle,
  TableCell,
  BookDetailsText,
} from './tableRowStyles';

function TableRow({ book }) {
  const navigate = useNavigate();

  const onDetailsClick = () => {
    navigate(`/books/details/${book.title}`);
  };

  return (
    <TableRowStyle>
      <TableCell>{book.title}</TableCell>
      <TableCell>{book.author}</TableCell>
      <TableCell>{book.language}</TableCell>
      <TableCell>{book.year}</TableCell>
      <TableCell
        action="true"
      >
        <BookDetailsText
          onClick={onDetailsClick}
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
};

export default TableRow;
