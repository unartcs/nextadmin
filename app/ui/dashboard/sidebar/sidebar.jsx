"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="sidebar-wrapper sticky top-[5rem] flex flex-col gap-0 align-middle w-full">
      <div className="sidebar-user flex gap-2 py-5">
        <Image
          src="/noavatar.png"
          alt="avatar"
          width="50"
          height="50"
          className="rounded-3xl"
        />
        <div className="sidebar-user-info flex flex-col text-sm align-middle justify-center">
          <span className="sidebar-user-name text-base font-bold">
            John Doe
          </span>
          <span className="sidebar-user-title">Administrator</span>
        </div>
      </div>
      <div className="sidebar-menu flex flex-col gap-6">
        {menuItems.map((item) => {
          return (
            <div key={item.title} className="flex flex-col">
              <div className="sidebar-menu-cat my-3">{item.title}</div>
              {item.list.map((i) => {
                return (
                  <Link
                    href={i.path}
                    key={i.title}
                    className={`sidebar-items flex align-middle items-center gap-2 py-3 px-[20px] rounded-md hover:bg-[#995522] my-[0.2rem] ${
                      pathname === i.path ? "bg-[#995522]" : "bg-softBg"
                    }`}
                  >
                    <h3>{i.icon}</h3>
                    <h3>{i.title}</h3>
                  </Link>
                );
              })}
            </div>
          );
        })}
      </div>
      <button className={`sidebar-logout flex align-middle items-center gap-2 py-3 px-[20px] rounded-md hover:bg-[#995522] `}>
        <MdLogout />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
