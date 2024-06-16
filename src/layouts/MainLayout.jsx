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
      <div className=" relative flex items-start mt-[4rem]">
        <SideBar isNavbarOpen={isNavbarOpen} toggleNavBar={toggleNavBar} navBarOpenType={navBarOpenType}/>
        <main className="w-[100%] p-6 transition-all duration-700 ease ">
         {children}
        </main>
      </div>
    </>
  );
};

export default MainLayout;
