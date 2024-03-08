
"use client"

import { Sidebar as ReactProSidebar, Menu, MenuItem, sidebarClasses } from "react-pro-sidebar";

import { BiSolidCategory } from "react-icons/bi";
import { FaBook, FaBookOpen, FaHome, FaHotel } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { MdOutlineDataUsage } from "react-icons/md";
import Image from "next/image";
import logo from "../../../public/logo.png"
import React, { useState } from "react";
import { useRouter } from "next/navigation";




const Sidebar = () => {
  const router = useRouter();

  const [selectedItem, setSelectedItem] = useState("/owner/dashboard");

  const handleItemClick = (link: string) => {
    setSelectedItem(link);
    router.push(link);
  }

  const menuItems = [
    {
      label: "Dashboard",
      icon: <FaHome />,
      link: "/owner/dashboard"
    },
    {
      label: "Trips",
      icon: <BiSolidCategory />,
      link: "/owner/trips"
    },
    {
      label: "Hotels",
      icon: <FaHotel />,
      link: "/owner/hotels"
    },
    {
      label: "Bookings",
      icon: <FaBookOpen />,
      link: "/owner/bookings"
    },
    {
      label: "Scrape data",
      icon: <MdOutlineDataUsage />,
      link: "/owner/scrape-data"
    }
  ];

  return (
    <div className="min-h-[100vh] overflow-hidden ">
      <ReactProSidebar className="h-full overflow-hidden "
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: '#ffffff',
            "&:hover": {
              backgroundColor: '#ffffff'
            },
          },
        }}
      >
        <Menu className="h-[100vh] max-h-[100vh] text-black overflow-hidden"
          menuItemStyles={{
            button: ({ level, active }) => {
              return {

                backgroundColor: active ? '#000000' : '#ffffff',
                color: active ? '#ffffff' : '#000000',
                "&:hover": {
                  backgroundColor: active ? '#000000' : '#000000',
                  color: active ? '#ffffff' : '#ffffff'
                }
              }
            }
          }}

        >
          <div className="flex items-center justify-center  flex-col my-3">
            <Image src={logo} alt="logo" width={120} height={120} className="cursor-pointer " />
            <span className="text-2xl font-bold text-green-600">
              <span>JourneyJot</span>
            </span>
          </div>
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              <MenuItem icon={item.icon} active={selectedItem === item.link} onClick={() =>           handleItemClick(item.link)}
              >
                {item.label}
              </MenuItem>
            </React.Fragment>
          ))}
          <MenuItem icon={<LuLogOut />} active={selectedItem === "/owner/logout"}>Logout</MenuItem>

        </Menu>

      </ReactProSidebar>
    </div>
  )
}

export default Sidebar