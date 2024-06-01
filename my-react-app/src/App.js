import React from 'react';
import {
  Chart,
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import "./App.css";
import { Bar } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
ChartJS.register(
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  ArcElement,
  Title,
  Tooltip,
  Legend)
//creating a function app()
function App(){
  //bar chart data
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [ 
      {
      label: 'Sales',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: [
          "#3cb371",
        ],
        borderWidth: 1, 
    },
    {
      label: 'loss', //display loss on the same chart
        data: [35, 49, 20, 19, 44, 45],
        backgroundColor: [
          "#ff0000",
        ],
    
    },
  ],
  }; 

  //bar chart options
  const options = {
    maintainAspectRatio: false,
    aspectRatio: 0.2,
    scales: {
      y:{
        beginAtZero: true,
      },

    },
  };

  //table data
  const data1 = [
    { id: 1, month: 'January', days: 31, sales: '65',loss: '35'},
    { id: 2, month: 'February', days: 29, sales: '59', loss: '49',},
    { id: 3, month: 'March', days: 31, sales: '80', loss: '20',},
    { id: 4, month: 'April', days: 30, sales: '81', loss:'19',},
    { id: 5, month: 'may', days: 31, sales: '56', loss: '44',},
    { id: 6, month: 'June', days: 30, sales: '55', loss: '45',}
];
  const data2 ={
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label:'Sales',
        fill: true,
        lineTension: 0.1,
        borderColor: '#3cb371',
        borderCapStyle: 'butt',
        data: [65, 59, 80, 81, 56, 55, 40],
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: 'green',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        pointStyle: 'cross',
      },
      {
        label: 'loss', //display loss on the same chart
          data: [35, 49, 20, 19, 44, 45],
          borderColor: [
            "#ff0000",
          ],
          pointRadius: 1,
          pointHoverBorderWidth: 2,
          fill: false,
          lineTension: 0.1,

      
      },
    ],
  };

//piechart data
const pieData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [65, 59, 80, 81, 56, 55 ],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#3cb371',
        '#0000ff',
        '#ffa500',
        '#FFCE56',
        'brown',
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#3cb371',
        '#0000ff',
        '#ffa500',
        '#FFCE56',
        'brown',
      ],
    },
  ],
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

            <div class="line"> <h3>Line Chart</h3>
              <Line data={data2} options={{ maintainAspectRatio: false }}/>
              <span className='footer'><small>line representation</small></span>
             </div>
            <div class="bar">
              <h3>Bar Chart</h3>
              <Bar data={data} options={options}/>
              <span className='footer'><small> bar representation of sales in respect to losses</small></span>
              </div>
            <div class="pie">
            <Pie data={pieData} />

            </div>

      </div>
      <div className='table'>
        <table className='style-table'>
                  <thead>
                      <tr>
                          <th>ID</th>
                          <th>Month</th>
                          <th>Days</th>
                          <th>sales</th>
                          <span className='last'><th>Loss</th></span>
                      </tr>
                  </thead>
                  <tbody>
                      {data1.map((item) =>(
                          <tr key={item.id}>
                              <td>{item.id}</td>
                              <td>{item.month}</td>
                              <td>{item.days}</td>
                              <td>{item.sales}</td>
                              <td>{item.loss}</td>
                          </tr>
                      ))}
                  </tbody>
              </table>
      </div>
      <div className='extras'>
        <span></span>
      </div>
    </div>
  );
};

export default App;
