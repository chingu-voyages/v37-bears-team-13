import { render, screen } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import Login from '../pages/Login';

describe('Login Page', () => {
  const LoginComponent = (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );

  test('inputs should be initially empty', () => {
    render(LoginComponent);
    const usernameInputElement: HTMLInputElement = screen.getByRole('textbox');
    const passwordInputElement: HTMLInputElement =
      screen.getByLabelText('Password:');
    expect(usernameInputElement.value).toBe('');
    expect(passwordInputElement.value).toBe('');
  });

  test('Should be able to type an username', () => {
    render(LoginComponent);
    const usernameInputElement: HTMLInputElement = screen.getByRole('textbox');
    userEvent.type(usernameInputElement, 'Mario');
    expect(usernameInputElement.value).toBe('Mario');
  });

  test('Should be able to type an password', () => {
    render(LoginComponent);
    const passwordInputElement: HTMLInputElement =
      screen.getByLabelText('Password:');
    userEvent.type(passwordInputElement, 'MarioSunshine');
    expect(passwordInputElement.value).toBe('MarioSunshine');
  });
});
