/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../helpers/renderWithRouter';
import pages from '../../pages';
import { booksAPI } from '../../pages/DetailsPage';
import singleBook from '../mocks/singleBook';

describe('Verifica a existência e informações de todos os elementos da página', () => {
  beforeEach(() => {
    jest.spyOn(booksAPI, 'getSeachedBooks').mockResolvedValue(singleBook);

    renderWithRouter(<pages.DetailsPage />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('O título do livro', () => {
    it('Verifica se existe um título', async () => {
      const title = await screen.findByTestId('details-book-title');
      expect(title).toBeInTheDocument();
    });

    it('Verifica se é o título correto', async () => {
      const title = await screen.findByTestId('details-book-title');
      expect(title.innerHTML).toBe(singleBook[0].title);
    });
  });

  describe('O autor do livro', () => {
    it('Verifica se existe um autor', async () => {
      const author = await screen.findByTestId('details-book-author');
      expect(author).toBeInTheDocument();
    });

    it('Verifica se é o autor correto', async () => {
      const author = await screen.findByTestId('details-book-author');
      expect(author.innerHTML).toBe(`Autor: ${singleBook[0].author}`);
    });
  });
});
