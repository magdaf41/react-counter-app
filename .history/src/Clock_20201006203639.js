
import React, {Component} from 'react';
import Clock.css

class Clock extends Component {

    constructor(props){
        super(props);

        this.state = {data: new Data()};
        console.log('Initialization lifeCycle: constructor(props)')
    }

    componentDidMount() {
        console.log('Mounting lifeCycle: componentDidMount()');
    }

    componentDidUpdate() {
        console.log('Updation lifeCycle: componentDidUpdate()');
    }

    componentWillUnmount() {
        console.log('Unmountins lifeCycle: componentWillUnmount()');
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