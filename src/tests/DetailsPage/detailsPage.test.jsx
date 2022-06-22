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

  describe('O númeor de páginas', () => {
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
});
