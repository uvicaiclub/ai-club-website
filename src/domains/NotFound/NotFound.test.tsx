import { render, screen } from '@testing-library/react'
import NotFound from './NotFound'

test('Not Found page: Renders', () => {
  render(<NotFound />)
  const linkElement = screen.getByText(/404/)
  expect(linkElement).toBeInTheDocument()
})
