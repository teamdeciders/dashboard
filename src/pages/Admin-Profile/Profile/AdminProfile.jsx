import React from "react";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "../../../components/Sidebar/Sidebar";

const AdminProfile = () => {
  return (
    <div>
      <div className="lg:h-[75vh] 2xl:h-[92vh]  px-5">
        <div className="flex items-center w-full min-h-full gap-10">
          <div className="max-w-contentContainer w-full lg:h-[550px]  border bg-white rounded-xl p-6">
            <nav>
              <ul className="flex gap-3 border-b mb-2">
                <li>
                  <Link to="">Profile Details</Link>
                </li>
                <li>
                  <Link to="change-password">Change Password</Link>
                </li>
              </ul>
            </nav>
            <div>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
