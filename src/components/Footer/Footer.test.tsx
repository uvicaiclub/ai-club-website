import { render, screen } from '@testing-library/react'
import Footer from './Footer'

test('Footer: Renders', () => {
  render(<Footer />)
  const linkElement = screen.getByText(/® 2019/)
  expect(linkElement).toBeInTheDocument()
})
