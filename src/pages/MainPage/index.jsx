import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import BooksAPI from '../../api/booksAPI';
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
    console.log(books);
  };

  return (
    <MainSection>
      <Header
        onInputChange={onInputChange}
        inputValue={searchTerm}
        onSearchButtonClick={onSearchButtonClick}
      />
      <BooksTable>
        <tbody>
          <tr>
            <TableTitle>Livro</TableTitle>
            <TableTitle>Autor</TableTitle>
            <TableTitle>Idioma</TableTitle>
            <TableTitle>Ano</TableTitle>
            <TableTitle>Ações</TableTitle>
          </tr>
        </tbody>
      </BooksTable>
    </MainSection>
  );
}

export default MainPage;
