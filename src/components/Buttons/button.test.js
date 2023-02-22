/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */

import React from "react";
import { Route, BrowserRouter as Router} from 'react-router-dom'
import { render, screen} from "@testing-library/react";
import Button from "./button";

test('Should do not allowed to be clicked', () =>{
    const { container } = render(<Button isDisabled />)
    expect(container.querySelector('span.disabled')).toBeInTheDocument()
})

test('Should render loading/spinner', () => {
    const { container, getByText } = render(<Button isLoading />)
    expect(getByText(/loading/i)).toBeInTheDocument()
    expect(container.querySelector('span')).toBeInTheDocument()
})

test('Should render <a> tag', () => {
    const { container } = render(<Button type='link' isExternal />)
    expect(container.querySelector('a')).toBeInTheDocument()
})

test('Should render <Link> component', () => {
    const { container } = render(
        <Router>
            <Button href='' type='link' />
        </Router>
        )
    expect(container.querySelector('a')).toBeInTheDocument()
    })