import React from 'react';
import "./App.css";
import { Bar } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
function App(){
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [ 
      {
      label: 'Sales',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: [
          "rgba(250, 192, 19, 0.8)",
        ],
        borderWidth: 1, 
    },
    {
      label: 'loss',
        data: [35, 49, 20, 19, 44, 45],
        backgroundColor: [
          "rgba(155, 89, 182, 0.8)",
        ],
    
    },
  ],
  }; 
  const options = {
    maintainAspectRatio: false,
    aspectRatio: 0.2,
    scales: {
      y:{
        beginAtZero: true,
      },

    },
  };
  
  return (
    <div className= "App">
      <div className="nav-bar">
         <a href="#" class="nav-item">Home</a>
          <a href="#" class="nav-item">About</a>
          <a href="#" class="nav-item">Services</a>
          <a href="#" class="nav-item">Contact</a>
          <a href="#" class="nav-item">Blog</a>
          <a href="#" class="nav-item">Support</a>
        </div>  
      <div className="box">

            <div class="line">

             </div>

            <div class="bar">
              <Bar data={data} options={options}/>
              
              </div>

            <div class="pie">pie chart</div>

      </div>
    </div>
  );
};

export default App;
