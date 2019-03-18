import * as React from 'react';
import { render } from 'react-dom';

import Example from './components/UseState';
import UseEffect from './components/UseEffect';
import '../src/style.css';

render(
    <div>
        <h1 className="index-title">REACT HOOKS LEARNING</h1>
        <Example />
        <h3 className="use-state-hook">Effect hooks</h3>
        <UseEffect />
    </div>,
    document.getElementById('app')
);