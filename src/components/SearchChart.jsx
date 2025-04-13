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
          color: "#fff", // White legend labels for better contrast
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "#fff", // White ticks for better contrast
        },
      },
      x: {
        ticks: {
          color: "#fff", // White ticks for x-axis
        },
      },
    },
  };

  return (
    <div
      style={{
        background: "rgba(255, 255, 255, 0.1)", // Glassmorphism background
        backdropFilter: "blur(10px)", // Blur effect
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 8px 32px rgba(31, 38, 135, 0.37)", // Soft shadow for the container
        border: "1px solid rgba(255, 255, 255, 0.2)", // Light border for the chart container
        maxWidth: "90%", // Ensuring the chart is responsive
        margin: "0 auto",
      }}
    >
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default SearchChart;
