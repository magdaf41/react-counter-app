

import React from 'react';


function Step(props) {
    return(

        <span>
            Krok: <input ref={(data) => { this._inputStep = data} } type="number" />


        </span>
    );
}

export default Step;