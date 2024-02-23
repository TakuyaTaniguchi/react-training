import React from 'react';
import { render, screen ,fireEvent, getByAltText, getByText } from '@testing-library/react';
import Button from './Button';

// Button test
// TODO:
/*
  1. Button要素のラベルが表示されていることをテストする
  2. Button要素がクリック可能であることをテストする
  3. Button要素がクリックされたときにonClick関数が実行されることをテストする
  4. Button要素のフックをテストする
*/

test('Button', () => {
  render(<Button label="Click me" onClick={()=>{}} />);
  const buttonElement = screen.getByText('Click me');
  expect(buttonElement).toBeInTheDocument();
});