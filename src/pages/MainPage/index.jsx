import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import BooksAPI from '../../api/booksAPI';
import TableRow from '../../components/TableRow';
import SearchFilter from '../../components/SearchFilter';
import PageButton from '../../components/PageButton';
import {
  MainSection,
  BooksTable,
  TableTitle,
  PagesContainer,
  PageCount,
} from './mainPageStyles';

const booksAPI = new BooksAPI('http://localhost:4000', 10000);
const pageLimit = 10;

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
      setPageInfo({ ...pageInfo, numberOfPages: booksResultCount / pageLimit });
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
      setPageInfo({ ...pageInfo, numberOfPages: Math.ceil(booksFetchedCount / pageLimit) });
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
    setPageInfo({ ...pageInfo, numberOfPages: Math.ceil(booksFetchedCount / pageLimit) });
  };

  const onPageButtonClick = async ({ target: { value } }) => {
    setPageInfo({ ...pageInfo, currPage: value });
    let fetchedBooks = [];
    if (searchFilter.minYear === '0' || searchFilter.maxYear === '0') {
      fetchedBooks = await booksAPI.getSeachedBooks(searchFilter.term, null, null, value);
      setBooks(fetchedBooks);
      return;
    }

    fetchedBooks = await booksAPI.getSeachedBooks(
      searchFilter.term,
      searchFilter.minYear,
      searchFilter.maxYear,
      value,
    );

    setBooks(fetchedBooks);
  };

  const getPages = () => {
    const pages = [];

    for (let index = 0; index < pageInfo.numberOfPages; index += 1) {
      pages.push(
        <PageButton
          key={index}
          value={index + 1}
          onClick={onPageButtonClick}
        >
          {index + 1}
        </PageButton>,
      );
    }

    return pages;
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
      <PageCount>{`Página atual: ${pageInfo.currPage}`}</PageCount>
      <PagesContainer>
        {
          getPages().map((page) => page)
        }
      </PagesContainer>
    </MainSection>
  );
}

export default MainPage;
