import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { StateProvider } from "../states/navbarState/statecontext";

const MainLayout = ({ children }) => {
  const [navBarOpenType, setNavBarOpenType] = useState("permanent");

  return (
    <StateProvider>
      <>
        <NavBar  />
        <div className=" relative flex items-start mt-[4rem]">
          <SideBar
          />
          <main className="w-[100%] p-6 transition-all duration-700 ease ">
            {children}
          </main>
        </div>
      </>
    </StateProvider>
  );
};

export default MainLayout;
