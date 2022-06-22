import React from 'react';
import PropTypes from 'prop-types';
import PageButtonStyle from './pageButtonStyles';

function PageButton({ children, value, onClick }) {
  return (
    <PageButtonStyle
      value={value}
      onClick={onClick}
      data-testid="page-button"
    >
      {children}
    </PageButtonStyle>
  );
}

PageButton.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PageButton;
