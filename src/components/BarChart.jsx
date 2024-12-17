import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Chart.js modüllerini kaydedelim
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const data = {
    labels: ["Q1", "Q2", "Q3", "Q4"], // Çeyrekler
    datasets: [
      {
        label: "Gelir",
        data: [5000, 8000, 12000, 15000], // Gelir verileri
        backgroundColor: "rgba(255, 99, 132, 0.2)", // Çubuk rengi
        borderColor: "rgba(255, 99, 132, 1)", // Çubuk sınır rengi
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "2024 Çeyrek Gelir Verileri",
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
