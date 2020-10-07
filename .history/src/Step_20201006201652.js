

import React from 'react';


function Step(props) {
    return(

        <span>
            Krok: <input ref={(stepValue) => { this._inputStep = stepValue} } type="number" />


        </span>
    );
}

export default Step;