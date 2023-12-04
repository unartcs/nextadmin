"use client";

import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="navbar-wrapper flex align-middle justify-between w-full bg-softBg p-5 rounded-2xl">
      <div className="navbar-title capitalize text font-bold self-center">{pathname.split("/").pop()}</div>
      <div className="navbar-menu flex gap-5">
        <div className="navbar-search flex gap-1 px-3 py-1 items-center  bg-[#995522] rounded-lg p-0 bg-opacity-75">
          <MdSearch size={20}/>
          <input type="text" placeholder="Search..." className="navbar-search-input rounded-lg p-1 text-[white] placeholder-[white] bg-[transparent] focus:outline-none" />
        </div>
        <div className="navbar-icons flex gap-2 items-center">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
