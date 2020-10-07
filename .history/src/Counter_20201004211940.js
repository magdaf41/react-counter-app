import React, { Component } from 'react';
import "./Counter.css";

import Display from './Display';
import ButtonsPanel from './ButtonsPanel'
// import { Component } from 'react';

class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counterValue: this.props.initValue
        };
    }

    changeValue = (action) => {

        let currentCounterValue = this.state.counterValue;

        if (action === 'add') {
            currentCounterValue += 1;
        } else if (action === 'reinit') {
            currentCounterValue = this.props.initValue;
        } else {
            currentCounterValue = 0;
        }

        this.setState((prevState, prevProps) => {
            return ({
                counterValue: currentCounterValue
            });
        });

    }
    render() {

        return (
            <div className="counter">
                Counter:
                <Display displayValue={this.state.counterValue} />
                <ButtonsPanel buttonMethod={this.changeValue} />
            </div>
        );
    }
}

export default Counter;




// function Counter(props) {

//     let randomNumber = Math.floor(Math.random() * (108 - 1 + 1) + 1);

//     return (
//         <div className="counter">
//             Counter:
//             <span className="value">
//                 {props.initValue}
//             </span>
//         </div>
//     );
// }

// export default Counter;






