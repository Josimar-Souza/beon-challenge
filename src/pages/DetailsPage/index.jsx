import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BooksAPI from '../../api/booksAPI';
import Loading from '../../components/Loading';
import {
  DetailsMainSection,
  InfoContainer,
  BookTitle,
  BookInfo,
  BookLink,
} from './detailsPageStyle';

export const booksAPI = new BooksAPI('http://localhost:4000', 10000);

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
          <BookTitle
            data-testid="details-book-title"
          >
            {book.title}
          </BookTitle>
          <BookInfo
            data-testid="details-book-author"
          >
            {`Autor: ${book.author}`}
          </BookInfo>
          <BookInfo
            data-testid="details-book-country"
          >
            {`País: ${book.country}`}
          </BookInfo>
          <BookInfo
            data-testid="details-book-pages"
          >
            {`Número de páginas: ${book.pages}`}
          </BookInfo>
          <BookInfo
            data-testid="details-book-year"
          >
            {`Ano de lançamento: ${book.year}`}
          </BookInfo>
          <BookInfo
            data-testid="details-book-language"
          >
            {`Idioma: ${book.language}`}
          </BookInfo>
          <BookInfo>
            <BookLink
              href={book.link}
              target="_blank"
              data-testid="details-book-link"
            >
              {book.link}
            </BookLink>
          </BookInfo>
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
