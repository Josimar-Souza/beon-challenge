import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailsMainSection from './detailsPageStyle';
import BooksAPI from '../../api/booksAPI';

const booksAPI = new BooksAPI('http://localhost:4000', 10000);

function DetailsPage() {
  const { title } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    const getBook = async () => {
      const fetchedBook = await booksAPI.getSeachedBooks(title);
      setBook(fetchedBook);
    };

    getBook();
  }, []);

  return (
    <DetailsMainSection>
      <h1>Details Page</h1>
    </DetailsMainSection>
  );
}

export default DetailsPage;
