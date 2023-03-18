import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";

const LeftNavbar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const navbarWidth = isExpanded ? "w-64" : "w-20";

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className={`flex flex-col justify-between h-screen bg-red-500 ${navbarWidth}`}>
      <div className="py-4">
        <div className={`${isExpanded ? "flex justify-between align-middle px-4" : "text-center"}`}>
          <h2 className={`text-white text-center font-bold text-2xl ${isExpanded ? "block" : "hidden"}`}>DIYO</h2>
          <button className={`bottom-4 left-4 p-1 rounded-full text-white focus:outline-none ${navbarWidth === "w-20" && "transform rotate-180"}`} onClick={handleToggle}>
            <Icon.ThreeDotsVertical className="w-5 h-5 fill-current inline-block" />
          </button>
        </div>
        <ul className="mt-8">
          <li>
            <button className={`block w-full py-2 px-4 text-white hover:bg-red-600 focus:outline-none ${isExpanded ? "text-left" : "text-center"}`}>
              <Icon.HouseDoor className="w-5 h-5 inline-block mr-2" />
              {isExpanded && <span>Home</span>}
            </button>
          </li>
          <li className="mt-4">
            <button className={`block w-full py-2 px-4 text-white hover:bg-red-600 focus:outline-none ${isExpanded ? "text-left" : "text-center"}`}>
              <Icon.ListOl className="w-5 h-5 inline-block mr-2" />
              {isExpanded && <span>Order</span>}
            </button>
          </li>
          <li className="mt-4">
            <button className={`block w-full py-2 px-4 text-white hover:bg-red-600 focus:outline-none ${isExpanded ? "text-left" : "text-center"}`}>
              <Icon.ColumnsGap className="w-5 h-5 inline-block mr-2" />
              {isExpanded && <span>Menu</span>}
            </button>
          </li>
        </ul>
      </div>
      <div className="pb-4">
        <button className={`block w-full py-2 px-4 text-white hover:bg-red-600 focus:outline-none ${isExpanded ? "text-left" : "text-center"}`} onClick={handleLogout}>
          <Icon.BoxArrowDownLeft className="w-5 h-5 inline-block mr-2" />
          {isExpanded && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default LeftNavbar;
