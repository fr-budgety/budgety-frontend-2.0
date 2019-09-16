/** @format */

import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  placeholder,
  label,
  name,
  type,
  className,
  errors,
  touched,
  value,
  handleBlur,
  handleChange,
  helperText,
}) => (
  <React.Fragment>
    {label && <label htmlFor="exampleInputEmail1">{label}</label>}
    <input
      name={name}
      type={type}
      className={`${className} ${errors && touched && 'is-invalid'}`}
      aria-describedby="emailHelp"
      placeholder={placeholder}
      value={value}
      onBlur={handleBlur}
      onChange={handleChange}
    />
    <div className="invalid-feedback">{errors && touched && errors}</div>
    {helperText && (
      <small id="emailHelp" className="form-text text-muted">
        {helperText}
      </small>
    )}
  </React.Fragment>
);
Input.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  errors: PropTypes.string,
  touched: PropTypes.bool,
  value: PropTypes.string.isRequired,
  handleBlur: PropTypes.func,
  handleChange: PropTypes.func.isRequired,
  helperText: PropTypes.string,
};

export default Input;
