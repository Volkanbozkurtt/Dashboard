import { Line } from "react-chartjs-2";
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

// Chart.js modüllerini kaydedelim
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], // Aylar
    datasets: [
      {
        label: "Satışlar",
        data: [12, 19, 3, 5, 2, 3, 7], // Satış verileri
        fill: false,
        borderColor: "rgba(75, 192, 192, 1)", // Çizgi rengi
        tension: 0.1,
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
        text: "2024 Satış Verileri",
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
