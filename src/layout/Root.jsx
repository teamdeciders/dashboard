import React from "react";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="max-h-screen min-h-screen">
      <div className="w-full bg-white">
        <h1 className="max-w-container bg-blue-600 py-4 mx-auto">Navbar</h1>
      </div>
      <div className="bg-[#F1F3F4] max-w-container mx-auto bg-[url('https://i.ibb.co/kKxqbS8/Group-260.png')] bg-cover bg-no-repeat bg-center">
        <Outlet />
      </div>
      <h1 className="max-w-container mx-auto w-full left-0 right-0  py-2 fixed bottom-0 text-center bg-yellow-50">
        Footer
      </h1>
      <div className="w-full bg-white">
        <h1 className="max-w-container w-full left-0 right-0 mx-auto py-2 fixed bottom-0 text-center bg-yellow-50">
          Footer
        </h1>
      </div>
    </div>
  );
};

export default Root;
