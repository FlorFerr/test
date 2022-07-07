import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Greeting from "./Greeting"

describe('Greeting component', () => {
    test('renders Prueba as a text', () => {
        render(<Greeting />)
        const pruebaElement = screen.getByText('Prueba')
        expect(pruebaElement).toBeInTheDocument();
    })

    test('renders "Not changed" if the button was not clicked', () => {
        render(<Greeting />)
        const outputElement = screen.getByText('Not changed', { exact: false})
        expect(outputElement).toBeInTheDocument();
    })

    test('renders "Changed" if the button was clicked', () => {
        render(<Greeting />)

        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement)

        const outputElement = screen.getByText('Changed!')
        expect(outputElement).toBeInTheDocument();
    })

    test('does not render "Not changed" if the button was clicked', () => {
        render(<Greeting />)

        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement)

        const outputElement = screen.queryByText('Not changed!', { exact: true})
        expect(outputElement).toBeNull()     
    })
})