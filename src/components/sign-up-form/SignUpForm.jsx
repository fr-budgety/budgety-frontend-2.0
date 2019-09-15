/** @format */

import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

const INPUT_ERRORS = {
  required: 'This field is required',
  notAnEmail: 'Insert a correct email',
  passwordMustMatch: "Password field's must match",
  wrongLenght: 'Password must be between 8 and 16 characters',
};

class SignUpForm extends Component {
  render() {
    return (
      <div className="SignUpForm">
        <div className="container">
          <h1>Sign up</h1>
          <Formik
            initialValues={{ email: '', password: '', confirmPassword: '' }}
            validationSchema={SignupSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    name="email"
                    type="email"
                    className={`form-control ${errors.email && touched.email && 'is-invalid'}`}
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <div className="invalid-feedback">{errors.email && touched.email && errors.email}</div>
                  <small id="emailHelp" className="form-text text-muted">
                    We will never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    className={`form-control ${errors.password && touched.password && 'is-invalid'}`}
                  />
                  <div className="invalid-feedback">{errors.password && touched.password && errors.password}</div>
                  <small id="emailHelp" className="form-text text-muted">
                    Password must be between 8 and 16 charachters
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmPassword}
                    className={`form-control ${errors.confirmPassword && touched.confirmPassword && 'is-invalid'}`}
                  />
                  <div className="invalid-feedback">
                    {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
                  </div>
                </div>

                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                  Submit
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email(INPUT_ERRORS.notAnEmail)
    .required(INPUT_ERRORS.required),
  password: Yup.string()
    .min(8, INPUT_ERRORS.wrongLenght)
    .max(16, INPUT_ERRORS.wrongLenght)
    .required(INPUT_ERRORS.required),

  confirmPassword: Yup.string()
    .required(INPUT_ERRORS.required)
    .test('passwords-match', INPUT_ERRORS.passwordMustMatch, function(value) {
      return this.parent.password === value;
    }),
});

export default SignUpForm;
