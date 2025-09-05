import { render, screen } from '@testing-library/react'
import Home from '../src/app/page'

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null
    }
  }
}))

describe('Home', () => {
  it('renders without crashing', () => {
    render(<Home />)
    expect(screen.getByText(/get started/i)).toBeInTheDocument()
  })
})
