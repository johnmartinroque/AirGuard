import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  RadialLinearScale, // Import RadialLinearScale
  RadarController, // Import RadarController
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

// Register necessary Chart.js modules for Radar chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  RadialLinearScale, // Register RadialLinearScale
  RadarController, // Register RadarController
  Title,
  Tooltip,
  Legend
);

function AirQualityRadarChart() {
  // Mock data for different pollutants (PM2.5, PM10, CO, etc.)
  const labels = ["PM2.5", "PM10", "CO", "NO2", "O3"];
  const data = {
    labels,
    datasets: [
      {
        label: "Air Quality Pollutants",
        data: [35, 40, 25, 50, 60], // mock data for pollutants
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
        fill: true,
        pointRadius: 6,
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
        text: "Air Quality Radar Chart",
      },
    },
    scales: {
      r: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
        },
        angleLines: {
          display: true,
        },
        grid: {
          color: "rgba(200, 200, 200, 0.2)",
        },
        pointLabels: {
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <div className="w-full h-96 p-4 bg-white dark:bg-gray-900 rounded-2xl shadow-md">
      <Radar data={data} options={options} />
    </div>
  );
}

export default AirQualityRadarChart;
