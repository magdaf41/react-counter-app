

import React from 'react';


class Step extends Component {

    constructor(props){
        super(props);

        this.state = 5;
    }

        render(){
            return(
                <div className='step'>
                    <input> Krok: {(data) => { this._inputStep = data} } type="number"</input>
                </div>
            )
        }
    }

    export default Step;