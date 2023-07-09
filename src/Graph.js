import React from 'react';
import Plot from 'react-plotly.js';

const Graph = ({ data, xAxis, yAxis, plotType }) => {
  const x = data[xAxis];
  const y = data[yAxis];

  let plotData;

  // Determine the plot type based on the user selection
  switch (plotType) {
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
          x: x,
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
      layout={{
        width: '100%',
        height: '400px',
        title: 'Plotly Graph',
        xaxis: { title: xAxis },
        yaxis: { title: yAxis },
      }}
    />
  );
};

export default Graph;
