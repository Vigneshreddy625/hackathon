import React from 'react';
import { Line } from 'react-chartjs-2';

const DisasterChart = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.date), 
    datasets: [
      {
        label: 'Disasters Over Time',
        data: data.map(item => item.count), 
        borderColor: '#66fcf1',
        backgroundColor: 'rgba(102, 252, 241, 0.5)',
        fill: true,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default DisasterChart;
