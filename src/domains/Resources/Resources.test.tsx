import { render, screen } from '@testing-library/react';
import Resources from './Resources';

test('Resources page: Renders', () => {
  render(<Resources />);
  const linkElement = screen.getByText('Repositories');
  expect(linkElement).toBeInTheDocument();
});
