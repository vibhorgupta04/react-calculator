import React from "react";

const Navbar = () => {
  return (
    <div className="bg-primary shadow-1 h-20">
      <span className="px-5 text-xl font-bold flex items-center h-20 ">
        <div className="cursor-pointer flex gap-2 item-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M4 2h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm1 2v16h14V4H5zm2 2h10v4H7V6zm0 6h2v2H7v-2zm0 4h2v2H7v-2zm4-4h2v2h-2v-2zm0 4h2v2h-2v-2zm4-4h2v6h-2v-6z" />
          </svg>
          <div>Calculator</div>
        </div>
      </span>
    </div>
  );
};

export default Navbar;
