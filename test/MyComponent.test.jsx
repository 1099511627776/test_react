import React from 'react';
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import MyComponent from '../src/MyComponent';

test('MyComponent', async () => {
    render(<MyComponent name="John" />);
    expect(screen.getByRole('heading')).toHaveTextContent('John');
});

