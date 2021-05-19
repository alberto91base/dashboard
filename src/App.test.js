import React from 'react';
// We're using our own custom render function and not RTL's render
// our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { render, fireEvent, screen } from './__test__/test-utils';
import App from './App';

test('renders learn react link', () => {
    render(<App />, {
        initialState: {},
    });
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});

it('Renders the connected app with initialState', () => {
    render(<App />, {
        initialState: {
            count: {
                count: 100,
            },
        },
    });
    expect(screen.getByText(/100/i)).toBeInTheDocument();
});
