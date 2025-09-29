import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register Chart.js modules
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function AirQualityChart() {
  // Mock data for one day (hourly AQI values)
  const labels = [
    "6 AM",
    "8 AM",
    "10 AM",
    "12 PM",
    "2 PM",
    "4 PM",
    "6 PM",
    "8 PM",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Air Quality Index (AQI)",
        data: [42, 55, 65, 72, 80, 60, 50, 45], // mock AQI values
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.3, // curve the line
        fill: true,
        pointRadius: 5,
        pointBackgroundColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: "Air Quality for Today",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "AQI",
        },
      },
      x: {
        title: {
          display: true,
          text: "Time of Day",
        },
      },
    },
  };

  return (
    <div className="w-full h-96 p-4 bg-white dark:bg-gray-900 rounded-2xl shadow-md">
      <Line data={data} options={options} />
    </div>
  );
}

export default AirQualityChart;
