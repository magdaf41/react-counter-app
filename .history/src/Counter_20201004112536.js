import React from 'react';
import './Counter.css';


function Counter(props) {

    return (
        <div className="counter">
            Counter:
            <span className="value">
                {Math.floor(Math.random() * (108 - 1) + 1)}
            </span>
        </div>
    );
}

export default Counter;






