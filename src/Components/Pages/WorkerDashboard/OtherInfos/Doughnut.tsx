import React from 'react';
import Chart from 'react-apexcharts';
import { Options } from 'react-apexcharts';

const Doughnut: React.FC = () => {
    const options: Options = {
        chart: {
            type: 'donut',
            toolbar: {
                show: false // Hides the toolbar
            }
        },
        stroke: {
            colors: ['transparent'], // Set the border color to transparent
            // lineCap="3"
           
        },
        

        colors: ['#349292', '#D0D3DA'],
        legend: {
            show: false // Hides the legend
        },
        labels: [], // Empty labels array
        

    };

    const series = [45, 45];

    return (
        <Chart
            options={options}
            series={series}
            type="donut"
            width="150"
            
        />
    );
};

export default Doughnut;
