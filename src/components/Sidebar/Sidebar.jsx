import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-[65px] p-4 h-[350px] bg-[#ffffff] border rounded-full">
      <ul>
      <Link to={"/"}>H</Link>
        <li>Email</li>
        <Link to={"/admin-profile"}>P</Link>
      </ul>
    </div>
  );
};

export default Sidebar;
