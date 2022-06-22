/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRouter';
import pages from '../../pages';
import { booksAPI } from '../../pages/MainPage';
import booksList from '../mocks/booksList';

describe('Testes da página principal', () => {
  beforeEach(() => {
    jest.spyOn(booksAPI, 'getSeachedBooks').mockImplementation(async (term = '') => {
      if (term === '') {
        return booksList.slice(0, 10);
      }

      const booksFound = booksList.filter((book) => book.title === term);

      return booksFound;
    });

    jest.spyOn(booksAPI, 'getSearchResultCount').mockResolvedValue(21);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Verifica a existência dos elementos do header', () => {
    it('Um título escrito "beon"', async () => {
      await act(async () => {
        renderWithRouter(<pages.MainPage />);
      });

      const beonTitle = await screen.findByRole('heading', { name: 'beon' });
      expect(beonTitle).toBeInTheDocument();
    });

    it('Um botão escrito "buscar"', async () => {
      await act(async () => {
        renderWithRouter(<pages.MainPage />);
      });

      const searchButton = await screen.findByRole('button', { name: 'Buscar' });
      expect(searchButton).toBeInTheDocument();
    });

    it('Um input com o placeholder "Busque livros pelo título, autor ou idioma"', async () => {
      await act(async () => {
        renderWithRouter(<pages.MainPage />);
      });

      const searchInput = await screen.findByPlaceholderText('Busque livros pelo título, autor ou idioma');
      expect(searchInput).toBeInTheDocument();
    });
  });

  describe('Verifica a existência dos elementos do filtro', () => {
    it('Um parágrafo escrito "Filtrar ano da publicação"', async () => {
      await act(async () => {
        renderWithRouter(<pages.MainPage />);
      });

      const paragraph = await screen.findByTestId('filter-paragraph-description');
      expect(paragraph).toBeInTheDocument();
      expect(paragraph.innerHTML).toBe('Filtrar ano da publicação:');
    });

    it('Um input para ano mínimo', async () => {
      await act(async () => {
        renderWithRouter(<pages.MainPage />);
      });

      const minYearInput = await screen.findByTestId('filter-min-input');
      expect(minYearInput).toBeInTheDocument();
    });

    it('Todos os icones dos inputs', async () => {
      await act(async () => {
        renderWithRouter(<pages.MainPage />);
      });

      const inputIcons = await screen.findAllByTestId('filter-input-icon');
      expect(inputIcons.length).toBe(2);
    });

    it('Um parágrafo escrito "até"', async () => {
      await act(async () => {
        renderWithRouter(<pages.MainPage />);
      });

      const paragraph = await screen.findByTestId('filter-paragraph-until');
      expect(paragraph).toBeInTheDocument();
      expect(paragraph.innerHTML).toBe('até');
    });

    it('Um input para ano máximo', async () => {
      await act(async () => {
        renderWithRouter(<pages.MainPage />);
      });

      const maxYearInput = await screen.findByTestId('filter-max-input');
      expect(maxYearInput).toBeInTheDocument();
    });

    it('Um parágrafo informando quantos resultados encontrados', async () => {
      await act(async () => {
        renderWithRouter(<pages.MainPage />);
      });

      const paragraph = await screen.findByTestId('filter-books-count');
      expect(paragraph).toBeInTheDocument();
      expect(paragraph.innerHTML).toBe('21 resultados encontrados');
    });
  });

  describe('Verifica a existência de elementos relacionados a páginação', () => {
    it('Um parágrafo mostrando a página atual', async () => {
      await act(async () => {
        renderWithRouter(<pages.MainPage />);
      });

      const currentPage = await screen.findByTestId('main-current-page');
      expect(currentPage).toBeInTheDocument();
      expect(currentPage.innerHTML).toBe('Página atual: 1');
    });

    it('Todos os botões de páginas', async () => {
      await act(async () => {
        renderWithRouter(<pages.MainPage />);
      });

      const pageButtons = await screen.findAllByTestId('page-button');
      expect(pageButtons.length).toBe(3);
    });
  });

  describe('Verifica a existencia e informações dos elementos da tabela', () => {
    it('Verifica se existe todos os elementos da primeira página', async () => {
      await act(async () => {
        renderWithRouter(<pages.MainPage />);
      });

      const tableRows = await screen.findAllByTestId('table-row');
      expect(tableRows.length).toBe(10);
    });

    it('Verifica os títulos dos livros', async () => {
      await act(async () => {
        renderWithRouter(<pages.MainPage />);
      });

      const firstPageBooks = booksList.slice(0, 10);
      const titlePromises = [];

      firstPageBooks.forEach((book, index) => {
        const bookTitle = screen.findByTestId(`row-title-${index}`);
        titlePromises.push(bookTitle);
      });

      const titles = await Promise.all(titlePromises);

      titles.forEach((title, index) => {
        expect(title.innerHTML).toBe(booksList[index].title);
      });
    });

    it('Verifica os autores dos livros', async () => {
      await act(async () => {
        renderWithRouter(<pages.MainPage />);
      });

      const firstPageBooks = booksList.slice(0, 10);
      const authorPromises = [];

      firstPageBooks.forEach((book, index) => {
        const bookAuthor = screen.findByTestId(`row-author-${index}`);
        authorPromises.push(bookAuthor);
      });

      const authors = await Promise.all(authorPromises);

      authors.forEach((author, index) => {
        expect(author.innerHTML).toBe(booksList[index].author);
      });
    });

    it('Verifica os idiomas dos livros', async () => {
      await act(async () => {
        renderWithRouter(<pages.MainPage />);
      });

      const firstPageBooks = booksList.slice(0, 10);
      const languagePromises = [];

      firstPageBooks.forEach((book, index) => {
        const bookLanguage = screen.findByTestId(`row-language-${index}`);
        languagePromises.push(bookLanguage);
      });

      const languages = await Promise.all(languagePromises);

      languages.forEach((language, index) => {
        expect(language.innerHTML).toBe(booksList[index].language);
      });
    });

    it('Verifica os anos dos livros', async () => {
      await act(async () => {
        renderWithRouter(<pages.MainPage />);
      });

      const firstPageBooks = booksList.slice(0, 10);
      const yearPromises = [];

      firstPageBooks.forEach((book, index) => {
        const bookYear = screen.findByTestId(`row-year-${index}`);
        yearPromises.push(bookYear);
      });

      const years = await Promise.all(yearPromises);

      years.forEach((year, index) => {
        expect(year.innerHTML).toBe(booksList[index].year.toString());
      });
    });
  });

  describe('Verifica o comportamento da página', () => {
    it('Verifica se ao clicar no botão de página 2 a página atual muda', async () => {
      await act(async () => {
        renderWithRouter(<pages.MainPage />);
      });

      const pageButtons = await screen.findAllByTestId('page-button');

      await act(async () => {
        userEvent.click(pageButtons[1]);
      });

      const currentPage = await screen.findByTestId('main-current-page');
      expect(currentPage.innerHTML).toBe('Página atual: 2');
    });

    it('Verifica se ao clicar em no botão "Detalhes" é redirecionado', async () => {
      await act(async () => {
        renderWithRouter(<pages.MainPage />);
      });

      const bookDetailsButton = await screen.findByTestId('row-details-0');

      await act(async () => {
        userEvent.click(bookDetailsButton);
      });

      const { location: { pathname } } = window;
      expect(pathname).toBe('/books/details/Teste%20title%201');
    });

    it('Verifica se é possível buscar um livro pelo título', async () => {
      await act(async () => {
        renderWithRouter(<pages.MainPage />);
      });

      const searchButton = await screen.findByRole('button', { name: 'Buscar' });
      const searchInput = await screen.findByPlaceholderText('Busque livros pelo título, autor ou idioma');

      await act(async () => {
        userEvent.type(searchInput, 'Teste title 1');
        userEvent.click(searchButton);
      });

      const tableRows = await screen.findAllByTestId('table-row');
      expect(tableRows.length).toBe(1);
    });
  });
});
