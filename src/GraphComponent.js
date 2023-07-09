import React from 'react';
import Plot from 'react-plotly.js';

const Graph = ({ data, type }) => {
  // Extract x and y coordinates from the data
  const x = data.map((point) => point.x);
  const y = data.map((point) => point.y);

  let plotData;

  // Determine the plot type based on the user selection
  switch (type) {
    case 'scatter':
      plotData = [
        {
          x: x,
          y: y,
          mode: 'markers',
          type: 'scatter',
          marker: { color: 'blue' },
        },
      ];
      break;
    case 'line':
      plotData = [
        {
          x: x,
          y: y,
          mode: 'lines',
          type: 'scatter',
          line: { color: 'green' },
        },
      ];
      break;
    case 'boxplot':
      plotData = [
        {
          y: y,
          type: 'box',
          boxpoints: 'all',
          marker: { color: 'red' },
        },
      ];
      break;
    default:
      plotData = [];
  }

  return (
    <Plot
      data={plotData}
      layout={{ width: '100%', height: '400px', title: 'Plotly Graph' }}
    />
  );
};

export default Graph;
