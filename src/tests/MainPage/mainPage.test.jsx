/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import renderWithRouter from '../helpers/renderWithRouter';
import pages from '../../pages';
import { booksAPI } from '../../pages/MainPage';

describe('Verifica a existência dos elementos do header', () => {
  beforeEach(() => {
    jest.spyOn(booksAPI, 'getSeachedBooks').mockResolvedValue([]);
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
});
