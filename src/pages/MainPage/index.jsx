import React, { useState } from 'react';
import Header from '../../components/Header';
import BooksAPI from '../../api/booksAPI';

const booksAPI = new BooksAPI('http://localhost:4000');

function MainPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);

  const onInputChange = ({ target: { value } }) => {
    setSearchTerm(value);
  };

  const onSearchButtonClick = async () => {
    const booksFetched = await booksAPI.getTermSeachedBooks(searchTerm);
    setBooks(booksFetched);
  };
  console.log(books);
  return (
    <section>
      <Header
        onInputChange={onInputChange}
        inputValue={searchTerm}
        onSearchButtonClick={onSearchButtonClick}
      />
    </section>
  );
}

export default MainPage;
