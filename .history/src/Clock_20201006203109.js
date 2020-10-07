
import React, {Component} from 'react';

class Clock extends Component {

    constructor(props){
        super(props);

        this.state = {data: new Data()};
        console.log('constructor(props)')
    }

    render(){
        return(
            <div className='clock'>
                <h4>Time: {this.state.data.toLocalTimeString()}<spam>X</spam></h4>
            </div>
        )
    }
}

export default Clock;