import React from 'react';
import './sidebar-bottom-item.css';

const SideBarBottomItem = (props) => (
        <div className = 'sidebar-bottom-item'>
            <p>Thing {props.number}</p>
        </div>
)

export default SideBarBottomItem;