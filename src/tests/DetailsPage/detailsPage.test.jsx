/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import renderWithRouter from '../helpers/renderWithRouter';
import pages from '../../pages';
import { booksAPI } from '../../pages/DetailsPage';
import singleBook from '../mocks/singleBook';

describe('Verifica a existência e informações de todos os elementos da página', () => {
  beforeEach(() => {
    jest.spyOn(booksAPI, 'getSeachedBooks').mockResolvedValue(singleBook);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('O título do livro', () => {
    it('Verifica se existe um título', async () => {
      await act(async () => {
        renderWithRouter(<pages.DetailsPage />);
      });

      const title = await screen.findByTestId('details-book-title');
      expect(title).toBeInTheDocument();
    });

    it('Verifica se é o título correto', async () => {
      await act(async () => {
        renderWithRouter(<pages.DetailsPage />);
      });

      const title = await screen.findByTestId('details-book-title');
      expect(title.innerHTML).toBe(singleBook[0].title);
    });
  });

  describe('O autor do livro', () => {
    it('Verifica se existe um autor', async () => {
      await act(async () => {
        renderWithRouter(<pages.DetailsPage />);
      });

      const author = await screen.findByTestId('details-book-author');
      expect(author).toBeInTheDocument();
    });

    it('Verifica se é o autor correto', async () => {
      await act(async () => {
        renderWithRouter(<pages.DetailsPage />);
      });

      const author = await screen.findByTestId('details-book-author');
      expect(author.innerHTML).toBe(`Autor: ${singleBook[0].author}`);
    });
  });

  describe('O país de origem', () => {
    it('Verifica se existe um país de origem', async () => {
      await act(async () => {
        renderWithRouter(<pages.DetailsPage />);
      });

      const country = await screen.findByTestId('details-book-country');
      expect(country).toBeInTheDocument();
    });

    it('Verifica se é o país correto', async () => {
      await act(async () => {
        renderWithRouter(<pages.DetailsPage />);
      });

      const country = await screen.findByTestId('details-book-country');
      expect(country.innerHTML).toBe(`País: ${singleBook[0].country}`);
    });
  });

  describe('O número de páginas', () => {
    it('Verifica se existe o número de páginas', async () => {
      await act(async () => {
        renderWithRouter(<pages.DetailsPage />);
      });

      const numberOfPages = await screen.findByTestId('details-book-pages');
      expect(numberOfPages).toBeInTheDocument();
    });

    it('Verifica se o número de páginas está correto', async () => {
      await act(async () => {
        renderWithRouter(<pages.DetailsPage />);
      });

      const numberOfPages = await screen.findByTestId('details-book-pages');
      expect(numberOfPages.innerHTML).toBe(`Número de páginas: ${singleBook[0].pages}`);
    });
  });

  describe('O ano de lançamento', () => {
    it('Verifica se existe o ano de lançamento', async () => {
      await act(async () => {
        renderWithRouter(<pages.DetailsPage />);
      });

      const year = await screen.findByTestId('details-book-year');
      expect(year).toBeInTheDocument();
    });

    it('Verifica se o ano de lançamento está correto', async () => {
      await act(async () => {
        renderWithRouter(<pages.DetailsPage />);
      });

      const year = await screen.findByTestId('details-book-year');
      expect(year.innerHTML).toBe(`Ano de lançamento: ${singleBook[0].year}`);
    });
  });

  describe('O idioma', () => {
    it('Verifica se existe o idioma', async () => {
      await act(async () => {
        renderWithRouter(<pages.DetailsPage />);
      });

      const language = await screen.findByTestId('details-book-language');
      expect(language).toBeInTheDocument();
    });

    it('Verifica se o idioma está correto', async () => {
      await act(async () => {
        renderWithRouter(<pages.DetailsPage />);
      });

      const language = await screen.findByTestId('details-book-language');
      expect(language.innerHTML).toBe(`Idioma: ${singleBook[0].language}`);
    });
  });

  describe('Um link para mais informações', () => {
    it('Verifica se existe o link', async () => {
      await act(async () => {
        renderWithRouter(<pages.DetailsPage />);
      });

      const link = await screen.findByTestId('details-book-link');
      expect(link).toBeInTheDocument();
    });

    it('Verifica se o link está correto', async () => {
      await act(async () => {
        renderWithRouter(<pages.DetailsPage />);
      });

      const link = await screen.findByTestId('details-book-link');
      expect(link.innerHTML).toBe(singleBook[0].link);
    });
  });
});
