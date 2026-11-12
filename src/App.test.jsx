import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('LEX & LAW website', () => {
  test('verandert de taal van Nederlands naar Engels', async () => {
    const user = userEvent.setup()

    render(<App />)

    // Controleer of de Nederlandse titel zichtbaar is.
    expect(
      screen.getByRole('heading', {
        name: 'LEX & LAW · ADVOCATEN',
      })
    ).toBeInTheDocument()

    // Klik op de knop om de taal te veranderen.
    await user.click(
      screen.getByRole('button', { name: 'EN' })
    )

    // Controleer of de Engelse titel zichtbaar is.
    expect(
      screen.getByRole('heading', {
        name: 'LEX & LAW · Lawyers',
      })
    ).toBeInTheDocument()
  })
})