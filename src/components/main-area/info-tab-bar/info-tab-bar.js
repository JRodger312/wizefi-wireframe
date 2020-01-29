import React from 'react';
import InfoTabBarButton from './info-tab-bar-button/info-tab-bar-button';
import './info-tab-bar.css';

const InfoTabBar = () => (
    <div className="info-tab-bar">
        <ul>
            <li><InfoTabBarButton name='SUMMARY' /></li>
            <li><InfoTabBarButton name='ALL' /></li>
            <li><InfoTabBarButton name='ASSETS' /></li>
            <li><InfoTabBarButton name='DEBTS' /></li>
            <li><InfoTabBarButton name='INSURANCE' /></li>
        </ul>
    </div>
)

export default InfoTabBar;