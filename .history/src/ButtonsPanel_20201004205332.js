import React from 'react';

import './ButtonsPanel.css'

function ButtonsPanel(props) {

    return (
        <div className="buttons-panel">
            <button onClick={() => {
                // console.log('Add clicked')
                props.buttonMethod('add');
            }}>Add 1</button>
            <button>ReInit</button>
            <button>Reset</button>
        </div>
    );
}

export default ButtonsPanel;