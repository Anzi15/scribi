import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

const MainLayout = ({ children }) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [navBarOpenType, setNavBarOpenType] = useState("permanent");

  const toggleNavBar = (type="permanent") => {
    setIsNavbarOpen(prevState => !prevState)
    setNavBarOpenType(type)
  };

  return (
    <>
      <NavBar
        isNavbarOpen={isNavbarOpen}
        toggleNavBar={toggleNavBar}
      />
      <div className=" relative flex items-start">
        <SideBar isNavbarOpen={isNavbarOpen} toggleNavBar={toggleNavBar} navBarOpenType={navBarOpenType}/>
        <main className="mt-[5rem] p-6 inline gap-1 transition-[width] duration-700 ease">
          {children}
        </main>
      </div>
    </>
  );
};

export default MainLayout;
