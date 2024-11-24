import { useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState("dark");
  const handleDarkMode = () => {
    if (darkMode === "dark") {
      setDarkMode("light");
    } else {
      setDarkMode("dark");
    }
  };
  return (
    <div className="flex items-center">
      {darkMode === "dark" ? (
        <div className="w-full bg-gray-300 p-6">Header</div>
      ) : (
        <div className="w-full bg-blue-300 p-6">Header</div>
      )}
      <div className="px-2.5 py-1 bg-red-200" onClick={() => handleDarkMode()}>
        {darkMode}
      </div>
    </div>
  );
};

export default Header;
