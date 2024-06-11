import React from 'react';
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

const MainLayout = ({ children }) => {
  return (
<>
        <NavBar />
    <div className=" relative flex items-start">

        <SideBar />
        <main className="mt-[5rem] p-6 inline gap-1">
          {children}
        </main>
    </div>
</>

  );
};

export default MainLayout;
