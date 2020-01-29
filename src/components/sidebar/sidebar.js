import React from 'react';
import SideBarItem from './sidebar-item/sidebar-item';
import SideBarBottom from './sidebar-bottom/sidebar-bottom';
import './sidebar.css';

const SideBar = () => (
        <div className = 'sidebar'>
        <div className = 'logo'>
            <p>WizeFi</p>
        </div>
        <div className = 'sidebar-nav'>
        <nav>
            <ul>
            <li><SideBarItem name = 'DASHBOARD' /></li>
            <li><SideBarItem name = 'IMPACT BUDGET' /></li>
            <li><SideBarItem name = 'TRANSACTIONS' /></li>
            <li><SideBarItem name = 'ACCOUNTS' /></li>
            <li><SideBarItem name = 'WIZEFI UNIVERSITY' /></li>
            <li><SideBarItem name = 'RESOURCE HUB' /></li>
            <li><SideBarItem name = 'CONNECT WITH A PRO' /></li>
            <li><SideBarItem name = 'AFFILIATES' /></li>
            </ul>
        </nav>
        </div>
        <div className = 'sidebar-bottom-container'>
            <SideBarBottom />
        </div>
        </div>
)

export default SideBar;