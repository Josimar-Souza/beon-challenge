import React from 'react';
import PropTypes from 'prop-types';
import PageButtonStyle from './pageButtonStyles';

function PageButton({ children }) {
  return (
    <PageButtonStyle>{children}</PageButtonStyle>
  );
}

PageButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageButton;
