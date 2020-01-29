import React from 'react';
import './top-bar.css';

const TopBar = () => (
    <div className = 'top-bar'>
        <ul>
        <div className='left'><li><i style={{fontSize :"24px", paddingRight:'10px'}} className="fa">&#xf021;</i>All Accounts last updated an hour ago</li></div>
        <div className='middle'><li><h2>Accounts</h2></li></div>
        <div className='right'><li><button>+ Add Account</button></li></div>
        </ul>
    </div>
)



export default TopBar;