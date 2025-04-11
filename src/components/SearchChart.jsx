import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const SearchChart = ({ data }) => {
  // Mock data structure if real chart data isn't ready
  const chartData = {
    labels: data.map((item) => item.title || "No Title"),
    datasets: [
      {
        label: "Search Frequency",
        data: data.map((item) => item.count || 1),
        backgroundColor: "#646CFF",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#333",
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default SearchChart;
