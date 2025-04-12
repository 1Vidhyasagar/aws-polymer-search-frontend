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
    <div style={{ width: "80%", margin: "0 auto", padding: "2rem" }}>
      <h3 style={{ textAlign: "center" }}>Search Analytics</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default StatsChart;
