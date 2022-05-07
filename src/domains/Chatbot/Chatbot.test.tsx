import { render, screen } from '@testing-library/react';
import Chatbot from './Chatbot';
import { Jaccard } from './chatbot_func';

test('Chatbot page: Renders', () => {
  render(<Chatbot />);
  const linkElement = screen.getByText(/UVic AI Club/);
  expect(linkElement).toBeInTheDocument();
});

test('Chatbot Functions: Renders', () => {
  const [jaccard, expected] = [Jaccard(['a', 'b', 'c', 'd'], ['a', 'b']), 0.5]
  expect(jaccard).toEqual(expected);
});