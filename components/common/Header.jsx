import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { RiMenu3Fill } from "react-icons/ri";

import MobileNav from "./MobileNav";

import logo from "../../assets/images/logo.png";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const items = [
    {
      name: "Acerca de",
      link: '/',
    },
    {
      name: "Agenda",
      link: "/",
      haveSubmenu: false,
    },
    {
      name: "Speakers",
      link: "/speakers",
      haveSubmenu: false,
    },
    {
      name: "registro",
      // haveSubmenu: true,
      // subMenu: [
      //   {
      //     name: "Vibing map",
      //     link: "/vibing-map",
      //   },
      //   {
      //     name: "Kingdom map",
      //     link: "/vibing-studio",
      //   },
      // ],
    },
  ];

  return (
    <header className={`w-full relative bg-transparent font-primary`}>
      <div className="w-[93%] xs:w-[97%] m-auto flex justify-between items-center h-24 navBreakpoint:py-0">
        <div className="flex items-center gap-6 xs:gap-2">
          <Link href={"/"}>
            <span className="sm:w-[18rem] w-[12rem] cursor-pointer block">
              <Image src={logo} alt="logo" />
            </span>
          </Link>
        </div>
        <div className="items-center flex">
          <nav className="no-underline hidden navBreakpoint:flex pb-[-1rem]">
            {items.map((item, index) => (
              <LinkComponent key={index} item={item} />
            ))}
          </nav>
          <RiMenu3Fill className="navBreakpoint:hidden text-4xl text-white cursor-pointer" onClick={() => setSidebarOpen(true)} />
        </div>
      </div>
      <MobileNav
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        items={items}
      />
    </header>
  );
};

export default Header;

const LinkComponent = ({ item }) => {
  const [active, setActive] = useState(false);
  const [subMenuActive, setSubMenuActive] = useState(false);
  const location = useRouter();

  return (
    <Link href={item.link || ""}>
      <span
        onMouseEnter={() => {
          item.haveSubmenu && setActive(true);
        }}
        onMouseLeave={() => {
          item.haveSubmenu && setActive(false);
        }}
        className={`cursor-pointer items-center mx-2 relative block`}
      >
        <span
          className={`font-medium mx-3 text-base duration-500 rounded-md text-white hover:text-white relative ${
            location.pathname === item.link || active
              ? "navitemActive"
              : "navitem"
          }`}
        >
          {item.name}
        </span>
        {/* {item.haveSubmenu && (
          <span
            className={`
            w-[13rem] p-3 bg-primary top-[100%] transform absolute flex flex-col z-50 rounded shadow-lg font-semibold duration-500 ${
              active
                ? "opacity-100 pointer-events-auto translate-y-[-0.5rem]"
                : "opacity-0 pointer-events-none translate-y-[2rem]"
            }`}
            onMouseLeave={() => {
              setActive(false);
              setSubMenuActive(false);
            }}
            onMouseEnter={() => {
              setSubMenuActive(true);
            }}
          >
            {item.subMenu.map((subItem, index) => (
              <span
                key={index}
                className="text-primary-light text-lg hover:text-white duration-500 my-2"
              >
                {subItem.name}
              </span>
            ))}
          </span>
        )} */}
      </span>
    </Link>
  );
};
