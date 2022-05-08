import { render, screen } from '@testing-library/react';
import YouTube from './YouTube';

test('YouTube: Renders', () => {
  render(<YouTube/>);
  // const banner = screen.getByRole('iframe');
  // expect(banner).toHaveAttribute('src', '/banner.png');
  // expect(banner).toHaveAttribute('alt', 'Banner');
});
