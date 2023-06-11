import React from 'react';

function MyComponent(props) {
    const { name } = props;

    return (
        <div>
            <h1>Hello, {name}!</h1>
        </div>
    );
}

export default MyComponent;