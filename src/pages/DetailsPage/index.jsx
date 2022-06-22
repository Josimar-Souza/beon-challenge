import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BooksAPI from '../../api/booksAPI';
import {
  DetailsMainSection,
  InfoContainer,
} from './detailsPageStyle';

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
  console.log(book);
  return (
    <DetailsMainSection>
      <InfoContainer>
        <h1>Details Page</h1>
      </InfoContainer>
    </DetailsMainSection>
  );
}

export default DetailsPage;
