

import React, { useState, useEffect } from "react";
import { Line,Bar } from "react-chartjs-2";
import axios from "axios";
import { useLocation } from "react-router-dom";


const Chart = (props) => {
  const [chartData, setChartData] = useState({});
  const [employeeSalary, setEmployeeSalary] = useState([]);
  const [employeeAge, setEmployeeAge] = useState([]);

  const chart = () => {
    let empSal = [];
    let empAge = [];
    let price2=[];
    let date2=[];
    axios
    .get(`http://localhost:8080/price`)
    .then(res => {
      console.log(res);
      for (const dataObj of res.data) {
        price2.push(parseInt(dataObj.currentPrice));
        date2.push(parseInt(dataObj.time));
         console.log(dataObj);
      }})
    axios
      .get(`http://localhost:8080/price`)
      .then(res => {
        console.log(res);
        for (const dataObj of res.data) {
          empSal.push(parseInt(dataObj.currentPrice));
          empAge.push(parseInt(dataObj.time));
          // console.log(dataObj);
        }

        




        setChartData({
          labels: empAge,
          datasets: [
            {
              label: "stockprice",
              data: empSal,
              backgroundColor: ["rgba(75, 192, 192, 0.6)"],
              borderWidth: 4
            },
              {
                label: "stockprice c2",
                data: price2,
                backgroundColor: ["rgba(75, 192, 192, 0.6)"],
                borderWidth: 4
                
              }
          ]
        
       
        }
        );
      })
      .catch(err => {
        console.log(err);
      });
    console.log(props);
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div className="App">
      <h1>Stockprice vs Date</h1>
      <div>
        <Line
          data={chartData}
          options={{
            responsive: true,
            // maintainAspectRatio:false,
            title: { text: "THICCNESS SCALE", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true
                  },
                  gridLines: {
                    display: false
                  }
                }
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false
                  }
                }
              ]
            }
          }}
          

        />
        
       
      </div>
    </div>
  );
};
export default Chart;