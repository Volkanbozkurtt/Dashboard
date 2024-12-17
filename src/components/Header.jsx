const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      <h1 className="text-xl font-bold">Yönetim Paneline Hoşgeldin!</h1>
      <input
        type="text"
        placeholder="Search..."
        className="border rounded p-2 w-1/3"
      />
    </div>
  );
};

export default Header;
