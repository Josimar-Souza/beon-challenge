import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import BooksAPI from '../../api/booksAPI';
import TableRow from '../../components/TableRow';
import SearchFilter from '../../components/SearchFilter';
import {
  MainSection,
  BooksTable,
  TableTitle,
} from './mainPageStyles';

const booksAPI = new BooksAPI('http://localhost:4000');

function MainPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const booksFetched = await booksAPI.getAllBooksPerPage(1);
      setBooks(booksFetched);
    };

    getBooks();
  }, []);

  const onInputChange = ({ target: { value } }) => {
    setSearchTerm(value);
  };

  const onSearchButtonClick = async () => {
    const booksFetched = await booksAPI.getTermSeachedBooks(searchTerm);
    setBooks(booksFetched);
  };

  return (
    <MainSection>
      <Header
        onInputChange={onInputChange}
        inputValue={searchTerm}
        onSearchButtonClick={onSearchButtonClick}
      />
      <SearchFilter />
      <BooksTable>
        <tbody>
          <tr>
            <TableTitle>Livro</TableTitle>
            <TableTitle>Autor</TableTitle>
            <TableTitle>Idioma</TableTitle>
            <TableTitle>Ano</TableTitle>
            <TableTitle>Ações</TableTitle>
          </tr>
          {
            books.map((book) => (
              <TableRow
                key={book.title}
                book={book}
              />
            ))
          }
        </tbody>
      </BooksTable>
    </MainSection>
  );
}

export default MainPage;
