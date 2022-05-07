import { render } from '@testing-library/react';
import App from './App';

test('App: Smoke Test', () => {
  render(<App />);
  const [a, b, expected] = [10, 2, 5];
  const result = a/b;
  expect(result).toEqual(expected);
});
