/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRouter';
import pages from '../../pages';
import { booksAPI } from '../../pages/MainPage';
import booksList from '../mocks/booksList';

describe('Verifica a existência dos elementos do header', () => {
  beforeEach(() => {
    jest.spyOn(booksAPI, 'getSeachedBooks').mockImplementation(async (term) => {
      if (term === '') {
        return booksList;
      }

      const booksFound = booksList.filter((book) => (
        book.title === term || book.author === term || book.language === term
      ));

      return booksFound;
    });
  });

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

  it('Verifica se é possivel realizar uma busca pelo título', async () => {
    await act(async () => {
      renderWithRouter(<pages.MainPage />);
    });

    const searchInput = await screen.findByPlaceholderText('Busque livros pelo título, autor ou idioma');
    const searchButton = await screen.findByRole('button', { name: 'Buscar' });

    await act(async () => {
      userEvent.type(searchInput, 'Test author 2');
      userEvent.click(searchButton);
    });

    const bookTitle = await screen.findByRole('cell', { name: 'Test author 2' });
    expect(bookTitle).toBeInTheDocument();
  });
});
