// src/components/Layout.js
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul className="flex align-middle bg-green-500 space-x-5 text-[22px] font-semibold" >
          <li className=" p-3 hover:bg-gray-200 hover:text-green-500">
            <Link to="/NewCandidate">New Candidate</Link>
          </li>
          <li className="p-3 hover:bg-gray-200 hover:text-green-500">
            <Link to="/manageCandidate">Manage Candidate</Link>
          </li>
          <li className="p-3 hover:bg-gray-200 hover:text-green-500">
            <Link to="/candidateShortlist">Candidate Shortlist</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
