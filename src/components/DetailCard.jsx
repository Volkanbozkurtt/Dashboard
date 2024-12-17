const DetailCard = ({ title, value, description }) => {
  return (
    <div className="group relative p-4 bg-white shadow-md rounded-lg hover:bg-gray-100 transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-2xl font-bold text-blue-600">{value}</p>
      <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-30 transition"></div>
      <div className="absolute inset-0 p-4 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default DetailCard;
