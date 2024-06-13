import React from "react";
import {
  MdLabelOutline,
  MdLightbulbOutline,
  MdOutlineArchive,
  MdOutlineDelete,
} from "react-icons/md";
import { NavLink } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RxPencil1 } from "react-icons/rx";

const SideBar = ({ isNavbarOpen, ToggleNavBar }) => {
  const linkClass = ({ isActive }) =>
    isNavbarOpen
      ? `px-4 flex items-center w-[17rem] rounded-r-full transition-[width] duration-300 ease-in-out p-3 pl-6 h-[3rem] ${
          isActive ? "bg-darkYellow" : "hover:bg-lightGrey"
        }  `
      : `px-4 flex items-center justify-center aspect-square rounded-full ml-3 rounded-r-full transition-width duration-200 ease-in-out h-[3rem] ${
          isActive ? "bg-darkYellow" : "hover:bg-lightGrey"
        }  p-3  `;

  const linkNameClass = isNavbarOpen ? "pl-6" : "hidden";

  const linkIconClass = ({ isActive }) =>
    isActive
      ? `option rounded-full  flex items-center justify-center aspect-square  w-12 bg-darkYellow`
      : `option rounded-full hover:bg-lightGrey flex items-center justify-center aspect-square w-12`;

      const asideClass = isNavbarOpen ? "bg-dark py-4 md:sticky fixed top-[4rem] min-h-[calc(100vh-4rem)] z-10 " : "py-4 sticky top-[4rem] min-h-[calc(100vh-4rem)] z-10"
  return (
    <aside className={asideClass}>
      <div className="top-options-con flex flex-col gap-2">
        <NavLink to="/" className={linkClass}>
          <div className={linkIconClass}>
            <MdLightbulbOutline className="text-2xl" />
          </div>
          <p className={linkNameClass}>Notes</p>
        </NavLink>

        <NavLink to="/reminders" className={linkClass}>
          <div className={linkIconClass}>
            <IoMdNotificationsOutline className="text-2xl" />
          </div>
          <p className={linkNameClass}>Reminders</p>
        </NavLink>

        {/* <NavLink to="/labels" className={linkClass}>
          <div className={linkIconClass}>
            <MdLabelOutline className="text-2xl" />
          </div>
          <p className={linkNameClass}>{labelName}</p>
        </NavLink> */}

        <NavLink to="/Labels" className={linkClass}>
          <div className={linkIconClass}>
            <RxPencil1 className="text-2xl" />
          </div>
          <p className={linkNameClass}>Edit Labels</p>
        </NavLink>

        <NavLink to="/archive" className={linkClass}>
          <div className={linkIconClass}>
            <MdOutlineArchive className="text-2xl" />
          </div>
          <p className={linkNameClass}>Archive</p>
        </NavLink>

        <NavLink to="/bin" className={linkClass}>
          <div className={linkIconClass}>
            <MdOutlineDelete className="text-2xl" />
          </div>
          <p className={linkNameClass}>Bin</p>
        </NavLink>
      </div>
    </aside>
  );
};

export default SideBar;
