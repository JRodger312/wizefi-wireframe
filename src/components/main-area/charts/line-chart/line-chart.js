
import React, { Component } from 'react'
import Chart from "chart.js";
import './line-chart.css';

export default class LineChart extends Component {
    chartRef = React.createRef();
    
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "line",
            data: {
                labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "August"],
                datasets: [
                    {
                        label: "Net Worth",
                        data: [1,1,1,2,4,5,7,10],
                        fill: false,
                        borderColor: 'rgba(63,158,221)',
                        borderWidth:  10
                        
                    }
                ]
            },
            options: {
                responsive:true,
                maintainAspectRatio:false
            }
        });
    }
    render() {
        Chart.defaults.global.legend.display = false;

        return (
            <div className='line-chart'>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                    style={{padding:'15px'}}
                />
            </div>
        )
    }
}