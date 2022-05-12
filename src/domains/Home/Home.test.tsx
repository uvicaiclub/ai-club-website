import { render, screen } from '@testing-library/react'
import Home from './Home'

test('Home page: Renders', () => {
  render(<Home />)
  const linkElement = screen.getByText(/UVic AI Club/)
  expect(linkElement).toBeInTheDocument()
})
