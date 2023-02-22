import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

describe('Should be success the test', () => {

    test('testing', () => {
        render(<Greet/>)
        const nameElement = screen.getByRole('button')
        expect(nameElement).toBeInTheDocument()
    })
})