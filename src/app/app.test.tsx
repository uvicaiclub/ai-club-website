import { render } from '@testing-library/react';
import App from './app';

test('A basic test', () => {
  render(<App />);

  const [a, b, expected] = [10, 2, 5];
  const result = a/b;

  expect(result).toEqual(expected);
});
