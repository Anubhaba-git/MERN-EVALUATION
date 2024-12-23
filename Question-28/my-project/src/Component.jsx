import React from 'react';
import ReactDOM from 'react-dom';
import HelloName from './HelloName'; // Assuming HelloName is in the same directory

ReactDOM.render(
    <HelloName name="John" />, // Passing "John" as the name
    document.getElementById('root')
);
