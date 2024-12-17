const Notification = ({ message, type }) => {
  return (
    <div
      className={`flex items-center p-4 mb-4 bg-${type}-100 text-${type}-800 rounded-lg shadow-md`}
    >
      <div className="mr-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 17v-4l-3 3m12 1v-4l-3 3m-6 3v-6m0 0v6m0 0l3-3m-3 3l-3-3"
          />
        </svg>
      </div>
      <div>{message}</div>
    </div>
  );
};

export default Notification;
