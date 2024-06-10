import React from 'react';
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

const MainLayout = ({ children }) => {
  return (
    <div className="layout-container">
      <NavBar />
      <div className="content-container">
        <main>
          {children}
        </main>
        <aside>
          <SideBar />
        </aside>
      </div>
    </div>
  );
};

export default MainLayout;
