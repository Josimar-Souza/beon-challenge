import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import pages from './pages';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/books" />} />
      <Route exact path="/books" element={<pages.MainPage />} />
      <Route exact path="/books/details/:title" element={<pages.DetailsPage />} />
    </Routes>
  );
}

export default App;
