import React, { Component } from 'react'
import Chart from "chart.js";
import './area-chart.css';

export default class AreaChart extends Component {
    chartRef = React.createRef();
    
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "line",
            data: {
                labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "August"],
                datasets: [
                    {
                        label: null,
                        data: [20, 40, 30, 15, 10, 60, 55, 70],
                        backgroundColor: 'rgb(214, 234, 248)',
                        tension: 0,
                        borderColor: '#3f9edd',
                        borderWidth: 10
                    },
                    {
                        label: null,
                        data: [10, 11, 14 ,18, 15],
                        tension: 1 ,
                        borderColor: 'rgba(63,158,221)',
                        borderWidth: 5,
                        fill: false
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
            <div className='chartcontainer'>
                <canvas
                    ref={this.chartRef} style={{display:"flex", height:"100%", width:"100%"}}
                 />
            </div>
        )
    }
}
