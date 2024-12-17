const StatCard = ({ title, value, icon, color }) => {
  return (
    <div
      className={`flex items-center p-4 bg-white shadow-md rounded-lg border-l-4 ${color}`}
    >
      {/* Icon */}
      <div className="p-3 rounded-full bg-gray-100 text-gray-600">{icon}</div>
      {/* Text */}
      <div className="ml-4">
        <h3 className="text-sm font-semibold text-gray-500">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default StatCard;
