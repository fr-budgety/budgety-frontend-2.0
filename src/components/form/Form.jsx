/** @format */

import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ handleSubmit, children, className }) => {
  return (
    <form {...className} onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.array,
};

export default Form;
