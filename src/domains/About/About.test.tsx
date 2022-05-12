import { render, screen } from '@testing-library/react'
import About from './About'

test('About page: Renders', () => {
  render(<About />)
  const linkElement = screen.getByText(/Mission Statement/)
  expect(linkElement).toBeInTheDocument()
})
