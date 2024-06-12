import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

const MainLayout = ({ children }) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const ToggleNavBar = () => {
    setIsNavbarOpen(prevState => !prevState);
  };
  return (
    <>
      <NavBar isNavbarOpen={isNavbarOpen} setIsNavbarOpen={setIsNavbarOpen} ToggleNavBar={ToggleNavBar} />
      <div className=" relative flex items-start">
        <SideBar isNavbarOpen={isNavbarOpen} setIsNavbarOpen={setIsNavbarOpen} />
        <main className="mt-[5rem] p-6 inline gap-1">{children}</main>
      </div>
    </>
  );
};

export default MainLayout;
