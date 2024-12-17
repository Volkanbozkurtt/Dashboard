import { FaUsers, FaChartBar, FaCog } from "react-icons/fa"; // İkonları import ettik

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatCard from "./components/StatCard";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import DetailCard from "./components/DetailCard";
import ProgressBar from "./components/ProgressBar";
import Notification from "./components/Notification";
import Modal from "./components/Modal";
import { useState } from "react";
import Swiper from "./components/Swiper";

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Stat Cards */}
          <StatCard
            title="Toplam Kullanıcılar"
            value="1,245"
            icon={<FaUsers />}
            color="border-blue-500"
          />
          <StatCard
            title="Satışlar"
            value="₺34,540"
            icon={<FaChartBar />}
            color="border-green-500"
          />
          <StatCard
            title="Ayarlar"
            value="14"
            icon={<FaCog />}
            color="border-red-500"
          />
        </div>

        {/* Yeni Bileşenler */}
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <DetailCard
            title="Yeni Satışlar"
            value="250"
            description="Yıl başından itibaren toplam satış."
          />
          <DetailCard
            title="Yeni Kullanıcılar"
            value="150"
            description="Yeni kayıt olan kullanıcılar."
          />

          <ProgressBar title="Proje Tamamlanma" progress={75} />
          <ProgressBar title="İşlem Tamamlanma" progress={50} />
        </div>

        {/* Grafikler */}
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 shadow-md rounded-lg">
            <LineChart />
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <BarChart />
          </div>
        </div>

        {/* Bildirim */}
        <Notification message="Bekleyen Kargo İşlemi" type="green" />

        {/* Modal */}
        <button
          onClick={() => setModalOpen(true)}
          className="bg-blue-500 text-white p-2 rounded-md"
        >
          Siparişler
        </button>
        <Modal
          isOpen={isModalOpen}
          close={() => setModalOpen(false)}
          content="Son Siparişler"
        />
      </div>
    </div>
  );
};

export default App;
