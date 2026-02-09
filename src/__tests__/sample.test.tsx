import { render, screen } from '@testing-library/react'

describe('Sample Test', () => {
  it('renders text', () => {
    render(<div>Hello</div>)
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })
})
