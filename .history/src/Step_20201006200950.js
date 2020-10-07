

import React from 'react';


function Step(props) {
    return(
        <div>Krok</div>
        <span className={`value ${(props.displayValue <= 5) ? 'blue' : 'red'}`}>
            {props.displayValue}
        </span>
    );
}

export default Step;