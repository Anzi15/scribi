import React, { useContext, useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import logo from "../assets/logo.png";
import avatar from "../assets/avatar.jpg";
import {StateContext} from "../states/navbarState/statecontext"


const NavBar = () => {
  const {state, dispatch} = useContext(StateContext)
  const { isSideBarOpen, navBarOpenType } = state;

  const [searchQueryPresent, setSearchQueryPresent] = useState(false);

  const handleSearchInput = (e) => {
    const searchedQuery = e.target.value;
    if (searchedQuery.trim() == "") {
    }
  };
  return (
    <>
      <nav className="px-3 py-1 min-h-[4rem]  border-y-[1px] border-lightGrey flex fixed top-0 right-0 left-0 bg-dark justify-between z-10">
        <div className="branding-group flex gap-4 w-15% ">
          <button
            onClick={()=>{dispatch({type: "TOGGLE_NAVBAR", payload: "Permanent"})}}
            className="hamburger-toggler text-2xl aspect-square focus:bg-lightGrey hover:bg-lightGrey p-2 rounded-[50%] flex justify-center items-center"
          >
            <RxHamburgerMenu />
          </button>

          <div className="brand-con flex items-center gap-2">
            <img className="brand-logo h-10  " src={logo} />
            <h3 className="brand-title text-2xl text-white spacing tracking-tight">
              Scribi
            </h3>
          </div>
        </div>

        <div className="flex w-[70%] md:justify-between justify-end">
          <div className="search-box-con  md:bg-lightGrey focus:bg-white w-fit md:w-[60%] min-h-[95%] rounded cursor-text flex items-center px-4 text-white gap-3 justify-self-center">
            <button className="hamburger-toggler text-2xl focus:bg-lightGrey hover:bg-lightGrey p-2 rounded-[50%]">
              <IoIosSearch />
            </button>

            <input
              type="text"
              name=""
              id=""
              placeholder="Search"
              className="bg-inherit text-inherit h-[100%] w-[90%] placeholder:text-inherit text-[1rem] md:flex hidden"
              onInput={handleSearchInput}
            />
          </div>

          <button className="profile-photo flex items-center">
            <img src={avatar} alt="" className="rounded-full h-9" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
