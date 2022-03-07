import { render, screen } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import Signup from '../pages/Signup';

describe('Signup Page', () => {
  const SignupComponent = (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  );

  test('inputs should be initially empty', () => {
    render(SignupComponent);
    const usernameInputElement: HTMLInputElement =
      screen.getByLabelText('Username:');
    const emailInputElement: HTMLInputElement =
      screen.getByLabelText('Username:');
    const passwordInputElement: HTMLInputElement =
      screen.getByLabelText('Password:');
    const confirmPasswordInputElement: HTMLInputElement =
      screen.getByLabelText('Confirm Password:');

    expect(usernameInputElement.value).toBe('');
    expect(emailInputElement.value).toBe('');
    expect(passwordInputElement.value).toBe('');
    expect(confirmPasswordInputElement.value).toBe('');
  });

  test('Should be able to type an username', () => {
    render(SignupComponent);
    const usernameInputElement: HTMLInputElement =
      screen.getByLabelText('Username:');
    userEvent.type(usernameInputElement, 'Mario');
    expect(usernameInputElement.value).toBe('Mario');
  });

  test('Should be able to type an email', () => {
    render(SignupComponent);
    const emailInputElement: HTMLInputElement =
      screen.getByLabelText('Username:');
    userEvent.type(emailInputElement, 'Mario@gmail.com');
    expect(emailInputElement.value).toBe('Mario@gmail.com');
  });

  test('Should be able to type an password', () => {
    render(SignupComponent);
    const passwordInputElement: HTMLInputElement =
      screen.getByLabelText('Password:');
    userEvent.type(passwordInputElement, 'MarioSunshine');
    expect(passwordInputElement.value).toBe('MarioSunshine');
  });

  test('Should be able to type a confirm password', () => {
    render(SignupComponent);
    const confirmPasswordInputElement: HTMLInputElement =
      screen.getByLabelText('Confirm Password:');
    userEvent.type(confirmPasswordInputElement, 'MarioSunshine');
    expect(confirmPasswordInputElement.value).toBe('MarioSunshine');
  });
});
