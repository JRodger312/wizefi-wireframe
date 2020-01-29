import React from 'react';
import './net-worth.css';

const NetWorth = (props) => (
    <div className = 'net-worth'>
        <div className = 'top-line'>{props.name}</div>
        <div className = 'bottom-line'>{props.amount}</div>
    </div>
)

export default NetWorth;