import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale);

const StatsChart = () => {
  const data = {
    labels: ["Polymer A", "Polymer B", "Polymer C"],
    datasets: [
      {
        label: "Search Count",
        data: [12, 19, 7],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderRadius: 5,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div
      style={{
        width: "80%",
        margin: "0 auto",
        padding: "2rem",
        background: "rgba(255, 255, 255, 0.1)", // Glassmorphism effect
        backdropFilter: "blur(8px)", // Blur effect
        borderRadius: "12px", // Rounded corners
        boxShadow: "0 8px 32px rgba(31, 38, 135, 0.37)", // Soft shadow
        border: "1px solid rgba(255, 255, 255, 0.2)", // Light border
      }}
    >
      <h3 style={{ textAlign: "center", color: "#fff" }}>Search Analytics</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default StatsChart;
