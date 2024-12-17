const ProgressBar = ({ progress, title }) => {
  return (
    <div className="flex flex-col space-y-2">
      <h4 className="font-semibold">{title}</h4>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-blue-600 h-2 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="text-right text-sm">{progress}%</div>
    </div>
  );
};

export default ProgressBar;
