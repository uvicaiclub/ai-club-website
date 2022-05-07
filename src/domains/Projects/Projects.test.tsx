import { render, screen } from '@testing-library/react';
import Projects from './Projects';

test('Projects page: Renders', () => {
  render(<Projects />);
  const linkElement = screen.getByText("Battlesnake:");
  expect(linkElement).toBeInTheDocument();
});
