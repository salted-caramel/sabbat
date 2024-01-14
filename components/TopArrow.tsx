import React from "react";
import { FaArrowUp } from "react-icons/fa";

const TopArrow = () => {
  return (
    <div className="relative">
      <FaArrowUp
        className="fixed bottom-4 right-4 hover:bg-slate-600 rounded-lg transition duration-300 p-2"
        size={40}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
    </div>
  );
};

export default TopArrow;
