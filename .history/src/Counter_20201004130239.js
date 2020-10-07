import React, {Component} from "react";
import "./Counter.css";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counterValue: 0,
        }
    }

    render() {
        return(
            <div className="counter">

            </div>
        )
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






