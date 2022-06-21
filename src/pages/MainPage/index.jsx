import React, { useState } from 'react';
import Header from '../../components/Header';

function MainPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const onInputChange = ({ target: { value } }) => {
    setSearchTerm(value);
  };

  return (
    <section>
      <Header
        onInputChange={onInputChange}
        inputValue={searchTerm}
      />
    </section>
  );
}

export default MainPage;
