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

    it('Verifica o conteúdo do título', async () => {
      const title = await screen.findByTestId('details-book-title');
      expect(title.innerHTML).toBe(singleBook[0].title);
    });
  });
});
