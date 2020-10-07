
import React, {Component} from 'react';

class Clock extends Component {

    constructor(props){
        super(props);

        this.state = {data: new Data()};
        console.log('constructor(props)')
    }
}

export default Clock;