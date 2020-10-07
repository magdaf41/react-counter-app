
import React, {Component} from 'react';


class Step extends Component {

    constructor(props){
        super(props);

        this.state = 5;

    }

        render(){
            return(

                    <input> Krok: {(data) => { this._inputStep = data} } type="number"</input>

            )
        }
    }

    export default Step;