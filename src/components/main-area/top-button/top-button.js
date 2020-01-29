import React from 'react';
import './top-button.css';

const TopToggleButton = () => (
    <div className = 'toggle-button'>
        <button type='checkbox'>
            <div className = 'button-left'>WizeFi Net Worth</div>
            <div className = 'button-right'>Standard Net Worth</div></button>
    </div>
)

export default TopToggleButton;