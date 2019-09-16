/** @format */

import React, { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import { Formik } from 'formik';
import Form from '../form/Form';
import * as Yup from 'yup';
import app from '../../config/base';
import FormGroup from '../form/FormGroup';
import Input from '../form/Input';

const INPUT_ERRORS = {
  required: 'This field is required',
  notAnEmail: 'Insert a correct email',
  passwordMustMatch: "Password field's must match",
  wrongLenght: 'Password must be between 8 and 16 characters',
};

class SignUpForm extends Component {
  /**
   * Async
   * @function handleSignup
   */
  handleSignUp = async ({ email, password }) => {
    try {
      await app.auth().createUserWithEmailAndPassword(email, password);
      this.props.history.push('/');
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return (
      <div className="SignUpForm">
        <div className="container">
          <h1>Sign up</h1>
          <Formik
            initialValues={{ email: '', password: '', confirmPassword: '' }}
            validationSchema={SignupSchema}
            onSubmit={async (values, { setSubmitting }) => {
              await this.handleSignUp(values);
              setSubmitting(false);
            }}
          >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
              <Form handleSubmit={handleSubmit}>
                <FormGroup>
                  <Input
                    type="email"
                    name="email"
                    label="Email address"
                    className="form-control"
                    placeholder="Enter email"
                    value={values.email}
                    onBlur={handleBlur}
                    handleChange={handleChange}
                    errors={errors.email}
                    touched={touched.email}
                    helperText="We will never share your email with anyone else."
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="password"
                    name="password"
                    label="Password"
                    className="form-control"
                    placeholder="Enter password"
                    value={values.password}
                    onBlur={handleBlur}
                    handleChange={handleChange}
                    errors={errors.password}
                    touched={touched.password}
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="password"
                    name="confirmPassword"
                    label="Password"
                    className="form-control"
                    placeholder="Re-type password"
                    value={values.confirmPassword}
                    onBlur={handleBlur}
                    handleChange={handleChange}
                    errors={errors.confirmPassword}
                    touched={touched.confirmPassword}
                  />
                </FormGroup>

                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                  Submit
                </button>
              </Form>
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

SignUpForm.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(SignUpForm);
