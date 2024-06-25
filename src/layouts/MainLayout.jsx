import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { StateProvider } from "../states/navbarState/statecontext";
import {authStateSignedIn} from "../services/firebaseAuth";
import SignInModal from "../components/modals/SignInModal";

const userSignedIn = await authStateSignedIn()

const MainLayout = ({ children }) => {
  const [navBarOpenType, setNavBarOpenType] = useState("permanent");

  return (
    <StateProvider>
      <>
        <NavBar  />
        <div className=" relative flex items-start mt-[4rem]">
          <SideBar
          />
          <main className="w-[100%] p-6 transition-all duration-700 ease relative">
            {children}
            {!userSignedIn && <SignInModal className="w-full"/>}
          </main>
        </div>
      </>
    </StateProvider>
  );
};

export default MainLayout;
