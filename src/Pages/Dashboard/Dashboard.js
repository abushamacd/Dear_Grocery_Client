import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard_sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard_sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li className="border-b-2 border-primary">
            <Link to={"/dashboard"}>My Profile</Link>
          </li>

          {!admin && (
            <>
              <li className="border-b-2 border-primary">
                <Link to={"/dashboard/orders"}>My Orders</Link>
              </li>
              <li className="border-b-2 border-primary">
                <Link to={"/dashboard/addreview"}>Add A Review</Link>
              </li>
            </>
          )}

          {admin && (
            <>
              <li className="border-b-2 border-primary">
                <Link to={"/dashboard/alluser"}>All Users</Link>
              </li>
              <li className="border-b-2 border-primary">
                <Link to={"/dashboard/allorder"}>Manage All Orders</Link>
              </li>
              <li className="border-b-2 border-primary">
                <Link to={"/dashboard/addproduct"}>Add A Product</Link>
              </li>
              <li className="border-b-2 border-primary">
                <Link to={"/dashboard/manageproduct"}>Manage Products</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
