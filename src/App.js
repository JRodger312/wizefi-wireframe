import React from 'react';
import SideBar from './components/sidebar/sidebar';
import TopBar from './components/main-area/top-bar/top-bar';
import InfoTabBar from './components/main-area/info-tab-bar/info-tab-bar';
import BottomBar from './components/main-area/bottom-bar/bottom-bar';
import BottomText from './components/main-area/bottom-text/bottom-text';
import TopToggleButton from './components/main-area/top-button/top-button';
import AreaChart from './components/main-area/charts/area-chart/area-chart';
import LineChart from './components/main-area/charts/line-chart/line-chart';
import NetWorth from './components/main-area/main-graph-top/net-worth-display/net-worth';
import ChangeDisplay from './components/main-area/main-graph-top/change-display/change-display';
import Arrow from './components/main-area/main-graph-top/arrow/arrow';
import InnerParagraph from './components/main-area/main-graph-top/inner-paragraph/inner-paragraph';
import Cafr from './components/main-area/main-graph-top/top-right-cafr/cafr';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="SideBar-Container">
        <SideBar/>
      </div>
      <div className="Main-Container">
        <div className="TopBar-Container">
          <TopBar/>
        </div>
        <div className="InfoTabBar-Container">
          <InfoTabBar/>
        </div>
        <div className="Main-Graph-Container">
            <div className= "Top-Button-Area">
            <TopToggleButton/>
            </div>
            <div className= "Graph-Area-One">
              <div className= "Graph-Area-One-Upper-Container">
                <div className = "Upper-Graph-Left">
                <NetWorth name = 'Current WizeFi Net Worth' amount = '$55000.00'/>
                </div>
                <div className = "Upper-Graph-Middle">
                <ChangeDisplay time= '1 Month' amount = '+ $254.00'/>
                </div>
                <div className = "Upper-Graph-Right">
                <Arrow/>  
                <ChangeDisplay time= '90 Days' amount = '+ $1422.50'/>
                </div>
              </div>
              <div className= "Graph-Area-One-Chart-Container">
              <AreaChart/>
              </div>
            </div>
            <div className= "Graph-Area-Two">
              <div className= "Graph-Area-Two-Upper-Container">
                <div className="Upper-Area-Two">
                  <div className="Upper-Area-Two-Left">
                  <NetWorth name = 'Future WizeFi Net Worth' amount = '$1155000'/>
                  </div>
                  <div className="Upper-Area-Two-Right">
                    <Cafr/>                  
                  </div>
                </div>
                <div className="Lower-Area-Two">
                  <InnerParagraph/>
                </div>
              </div>
              <div className= "Graph-Area-Two-Chart-Container">
              <LineChart/>
              </div>
              </div>
            {/* <div className="Net-Worth-Info"> */}
            {/* </div> */}

        </div>
        <div className='bottom-bar-container'>
          <BottomBar/>
        </div>
        <div className='bottom-text'>
          <BottomText/>
        </div>
      </div>
    </div>
  );
}

export default App;
