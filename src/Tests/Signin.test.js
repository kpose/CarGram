import React from 'react';
import {Signin} from '../Screens';
import {fireEvent, render} from '@testing-library/react-native';

it('Should create an item', () => {
  const {getByPlaceholderText, getByText} = render(<Signin />);

  const textInput = getByPlaceholderText('Email');
  const loginButton = getByText('Log in');

  const createdItemText = 'email.com';

  fireEvent.changeText(textInput, createdItemText);
  fireEvent.press(loginButton);

  const createdItem = getByText(createdItemText);

  expect(createdItem).not.toBeNull();
});
