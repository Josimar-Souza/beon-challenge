import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BooksAPI from '../../api/booksAPI';
import Loading from '../../components/Loading';
import {
  DetailsMainSection,
  InfoContainer,
  BookTitle,
  BookInfo,
} from './detailsPageStyle';

const booksAPI = new BooksAPI('http://localhost:4000', 10000);

function DetailsPage() {
  const { title } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    const getBook = async () => {
      const fetchedBook = await booksAPI.getSeachedBooks(title);
      setBook(fetchedBook[0]);
    };

    getBook();
  }, []);

  if ('title' in book) {
    return (
      <DetailsMainSection>
        <InfoContainer>
          <BookTitle>{book.title}</BookTitle>
          <BookInfo>{`Autor: ${book.author}`}</BookInfo>
          <BookInfo>{`Pais: ${book.country}`}</BookInfo>
          <BookInfo>{`Número de páginas: ${book.pages}`}</BookInfo>
          <BookInfo>{`Ano de lançamento: ${book.year}`}</BookInfo>
          <BookInfo>{`Idioma: ${book.language}`}</BookInfo>
        </InfoContainer>
      </DetailsMainSection>
    );
  }

  return (
    <DetailsMainSection>
      <Loading />
    </DetailsMainSection>
  );
}

export default DetailsPage;
