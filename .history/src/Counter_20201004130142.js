import React, {Component} from "react";
import "./Counter.css";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counterValue: 0,
        }
    }
    changeValue = () => {
        this.setState( (prevState) => {
            return({
                counterValue: prevState.counterValue + 1,
            })
        });
    }
    render() {
        return(
            <div className="counter">
                Licznik:
                <span className="value">{this.state.counterValue}</span>
                <button onClick={this.changeValue}>
                    Add 1
                </button>
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






