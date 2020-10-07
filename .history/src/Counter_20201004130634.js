import React, {Component} from "react";
import "./Counter.css";
// import { Component } from 'react';

class Counter extends Component {

    constructor(props){
        super(props);

        this.state = {
            counterValue: this.props.initValue
        };
    }

    render() {

        return (
            <div className="counter">
                Counter:
                <span className="value">
                    {this.props.initValue}
                </span>
            </div>
        );
    }
}

// export default Counter;




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






