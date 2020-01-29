import React from 'react';
import './changedisplay.css'

const ChangeDisplay = (props) => (
    <div className = 'change-display'>
        <div className = 'timeframe'>{props.time}</div>
        <div className = 'amount'>{props.amount}</div>
    </div>
)

export default ChangeDisplay;