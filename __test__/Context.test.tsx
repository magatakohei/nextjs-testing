import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { StateProvider } from '../context/StateProvider'
import ContextA from '../components/ContextA'
import ContextB from '../components/ContextB'

describe('Global state management (useContext)', () => {
  it('Should change the toggle state globally', () => {
    render(
      <StateProvider>
        <ContextA />
        <ContextB />
      </StateProvider>
    )
    expect(screen.getByTestId('toggle-a').textContent).toBe('False')
    expect(screen.getByTestId('toggle-b').textContent).toBe('False')
    userEvent.click(screen.getByRole('button'))
    expect(screen.getByTestId('toggle-a').textContent).toBe('True')
    expect(screen.getByTestId('toggle-a').textContent).toBe('True')
  })
})