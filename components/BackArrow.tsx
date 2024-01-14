import { FiArrowLeft } from "react-icons/fi";

import React from "react";

const BackArrow = () => {
  return (
    <a href="/" className="">
      <FiArrowLeft
        className="arrow-icon absolute mt-6 ml-6 hover:bg-slate-600 rounded-lg transition duration-300"
        size={30}
      />
    </a>
  );
};

export default BackArrow;
