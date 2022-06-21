import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import BooksAPI from '../../api/booksAPI';
import TableRow from '../../components/TableRow';
import SearchFilter from '../../components/SearchFilter';
import {
  MainSection,
  BooksTable,
  TableTitle,
  PagesContainer,
} from './mainPageStyles';

const booksAPI = new BooksAPI('http://localhost:4000');

function MainPage() {
  const [searchFilter, setSearchFilter] = useState({ term: '', minYear: '0', maxYear: '0' });
  const [books, setBooks] = useState([]);
  const [resultCount, setResultCount] = useState(0);
  const [pageInfo, setPageInfo] = useState({ currPage: 1, numberOfPages: 0 });

  useEffect(() => {
    const getBooks = async () => {
      const booksFetched = await booksAPI.getAllBooksPerPage(1);
      const booksResultCount = await booksAPI.getSearchResultCount('');
      setResultCount(booksResultCount);
      setBooks(booksFetched);
      setPageInfo({ ...pageInfo, numberOfPages: booksResultCount / 20 });
    };

    getBooks();
  }, []);

  const onInputChange = ({ target: { value, name } }) => {
    setSearchFilter({ ...searchFilter, [name]: value });
  };

  const onSearchButtonClick = async () => {
    let booksFetched;
    let booksFetchedCount;
    if (searchFilter.minYear === '0' || searchFilter.maxYear === '0') {
      booksFetched = await booksAPI.getSeachedBooks(searchFilter.term);
      booksFetchedCount = await booksAPI.getSearchResultCount(`q=${searchFilter.term}`);
      setBooks(booksFetched);
      setResultCount(booksFetchedCount);
      return;
    }

    booksFetched = await booksAPI.getSeachedBooks(
      searchFilter.term,
      searchFilter.minYear,
      searchFilter.maxYear,
    );

    booksFetchedCount = await booksAPI.getSearchResultCount(
      `q=${searchFilter.term}&year_gte=${searchFilter.minYear}&year_lte=${searchFilter.maxYear}`,
    );

    setBooks(booksFetched);
    setResultCount(booksFetchedCount);
  };

  return (
    <MainSection>
      <Header
        onInputChange={onInputChange}
        inputValue={searchFilter.term}
        onSearchButtonClick={onSearchButtonClick}
      />
      <SearchFilter
        booksCount={resultCount}
        onInputChange={onInputChange}
        minYearValue={searchFilter.minYear}
        maxYearValue={searchFilter.maxYear}
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
          {
            books.map((book) => (
              <TableRow
                key={`${book.title}-${book.author}`}
                book={book}
              />
            ))
          }
        </tbody>
      </BooksTable>
      <PagesContainer>
        Page 1
      </PagesContainer>
    </MainSection>
  );
}

export default MainPage;
