import { render, screen } from '@testing-library/react';
import Contact from './Contact';

test('Contact page: Discord link', () => {
  render(<Contact />);
  const linkElement = screen.getByText(/here/i);
  expect(linkElement).toBeInTheDocument();
});

test('Contact page: E-mail', () => {
  render(<Contact />);
  const linkElement = screen.getByText(/uvicaiclub@gmail.com/);
  expect(linkElement).toBeInTheDocument();
});
