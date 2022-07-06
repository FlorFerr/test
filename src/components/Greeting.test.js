import { render, screen } from "@testing-library/react"
import Greeting from "./Greeting"

describe('Greeting component', () => {
    test('renders Prueba as a text', () => {
        render(<Greeting />)
        const pruebaElement = screen.getByText('Prueba')
        expect(pruebaElement).toBeInTheDocument();
    })


})
