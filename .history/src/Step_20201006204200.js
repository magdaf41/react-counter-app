

import React from 'react';


class Step extends Component {

    constructor(props){
        super(props);

        this.state = (props.StepValue);


    render(){
        return(
            <div className='clock'>
                <h4>Time: {this.state.date.toLocaleDateString()}<spam>X</spam></h4>
            </div>
        )
    }
}

export default Clock;