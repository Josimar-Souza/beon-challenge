import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

const renderWithRouter = (component) => ({
  ...render(
    <BrowserRouter>{component}</BrowserRouter>,
  ),
});

export default renderWithRouter;
