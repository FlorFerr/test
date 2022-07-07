import { render, screen } from "@testing-library/react"
import Async from "./Async"

describe('Async', () => {
    test('renders post if request is succeeds', async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'p1', text: 'The first Post'}]
        })
        render(<Async />)
        const listItemElements = await screen.findAllByRole('listitem')
        expect(listItemElements).not.toHaveLength(0);

    })
    

})