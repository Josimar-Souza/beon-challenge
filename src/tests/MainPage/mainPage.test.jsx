/* eslint-disable no-undef */
import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import renderWithRouter from '../helpers/renderWithRouter';
import pages from '../../pages';
import { booksAPI } from '../../pages/MainPage';
import booksList from '../mocks/booksList';

describe('Testes da página principal', () => {
  beforeEach(() => {
    jest.spyOn(booksAPI, 'getSeachedBooks').mockResolvedValue(booksList);

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
});
