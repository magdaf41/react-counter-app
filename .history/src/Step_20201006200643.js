

import React from 'react';


function Step(props) {
    return(
        <span className={`value ${(props.displayValue <= 5) ? 'blue' : 'red'}`}>
            {props.displayValue}
        </span>
    );
}

export default Step;