import { render, screen } from '@testing-library/react'
import HelloWorld from './HelloWorld'

describe('HelloWorld | component | unit test', () => {
  it('should render with success', () => {
    render(<HelloWorld>React JavaScript Boilerplate</HelloWorld>)

    expect(screen.getByText('React JavaScript Boilerplate')).toBeInTheDocument()
  })
})
