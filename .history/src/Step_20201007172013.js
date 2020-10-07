
import React, { Component } from 'react';


class Step extends Component {

    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div>
                Krok:
                <input ref={(data) => { this._inputStep = data }} type="number" />
            </div>


        )
    }
}

export default Step;