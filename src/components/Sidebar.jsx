const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white">
      <h2 className="text-2xl font-bold p-4">Dashboard</h2>
      <ul className="space-y-4 p-4">
        <li className="hover:bg-gray-700 p-2 rounded">Anasayfa</li>
        <li className="hover:bg-gray-700 p-2 rounded">Analiz</li>
        <li className="hover:bg-gray-700 p-2 rounded">Ayarlar</li>
        <li className="hover:bg-gray-700 p-2 rounded">API</li>
        <li className="hover:bg-gray-700 p-2 rounded">Ürünler</li>
        <li className="hover:bg-gray-700 p-2 rounded">Tema Düzeni</li>
        <li className="hover:bg-gray-700 p-2 rounded">Kargo Yönetimi</li>
        <li className="hover:bg-gray-700 p-2 rounded">Reklamlar</li>
        <li className="hover:bg-gray-700 p-2 rounded">Kampanya</li>
        <li className="hover:bg-gray-700 p-2 rounded">Canlı Destek</li>
      </ul>
    </div>
  );
};

export default Sidebar;
