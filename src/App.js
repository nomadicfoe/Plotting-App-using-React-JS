import React, { useState } from 'react';
import Graph from './Graph';
import './App.css';

const App = () => {
  const [jsonData, setJsonData] = useState(null);
  const [xAxis, setXAxis] = useState('');
  const [yAxis, setYAxis] = useState('');
  const [plotType, setPlotType] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const content = event.target.result;
      const data = JSON.parse(content);
      setJsonData(data);
    };

    reader.readAsText(file);
  };

  const handleXAxisChange = (e) => {
    setXAxis(e.target.value);
  };

  const handleYAxisChange = (e) => {
    setYAxis(e.target.value);
  };

  const handlePlotTypeChange = (e) => {
    setPlotType(e.target.value);
  };

  const generateOptions = (data) => {
    if (data) {
      return Object.keys(data);
    }
    return [];
  };

  const options = generateOptions(jsonData);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">Plotly App</h1>
      </header>
      <div className="app-content">
        <input
          type="file"
          accept=".json"
          onChange={handleFileChange}
          className="file-input"
        />
        {jsonData && (
          <div className="graph-container">
            <div className="select-container">
              <label className="select-label">Select X-Axis:</label>
              <select
                value={xAxis}
                onChange={handleXAxisChange}
                className="graph-select"
              >
                <option value="">Select X-Axis</option>
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="select-container">
              <label className="select-label">Select Y-Axis:</label>
              <select
                value={yAxis}
                onChange={handleYAxisChange}
                className="graph-select"
              >
                <option value="">Select Y-Axis</option>
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="select-container">
              <label className="select-label">Select Plot Type:</label>
              <select
                value={plotType}
                onChange={handlePlotTypeChange}
                className="graph-select"
              >
                <option value="">Select Plot Type</option>
                <option value="scatter">Scatter Plot</option>
                <option value="line">Line Plot</option>
                <option value="boxplot">Box Plot</option>
              </select>
            </div>
            {xAxis && yAxis && plotType && (
              <Graph
                data={jsonData}
                xAxis={xAxis}
                yAxis={yAxis}
                plotType={plotType}
              />
            )}
          </div>
        )}
      </div>
      <footer className="app-footer">PlotApp - Powered by React.js</footer>
    </div>
  );
};

export default App;
