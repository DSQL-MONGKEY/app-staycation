import React from "react";
import { getByRole, render, screen } from "@testing-library/react";
import Button from "./index";
import App from "App";

test("Should not  allowed click button if isDisabled is present", () => {

    const {container} = render(<Button isDisabled></Button>)
    expect(container).toBeInTheDocument()
})

test("Should render a component", () => {

    render(<App/>)
    const linkElement = screen.getByText(/learn react/i)
    expect(linkElement).toBeInTheDocument()
})