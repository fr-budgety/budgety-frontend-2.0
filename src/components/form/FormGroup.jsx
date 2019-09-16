/** @format */

import React from 'react';
import PropTypes from 'prop-types';

const FormGroup = ({ children, className }) => <div className={`${{ ...className }} 'form-group'`}>{children}</div>;

FormGroup.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  className: PropTypes.string,
};

export default FormGroup;
