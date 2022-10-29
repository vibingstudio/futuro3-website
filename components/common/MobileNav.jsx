import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import logo from "../../assets/images/logo.png";

const MobileNav = ({ setSidebarOpen, sidebarOpen, items }) => {
  return (
    <Transition.Root show={sidebarOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-[9999] flex navBreakpoint:hidden"
        onClose={setSidebarOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="relative flex w-full max-w-[20rem] flex-1 flex-col bg-primary pt-5 pb-4">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="absolute top-[3rem] right-[-1rem] -mr-12 pt-2 z-[9999]">
                <button
                  type="button"
                  className="ml-1 flex h-10 w-10 items-center justify-center rounded-full bg-transparent border-none focus:outline-none "
                  onClick={() => setSidebarOpen(false)}
                >
                  <AiOutlineClose
                    className="h-8 w-8 text-white  cursor-pointer"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </Transition.Child>
            
              <div className="flex justify-center">
                <Link href={"/"} className="no-underline">
                  <div
                    className="w-[12rem]"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <Image src={logo} alt="logo" />
                  </div>
                </Link>
              </div>
            
            <nav
              className="mt-5 h-fulloverflow-y-auto font-primary"
              aria-label="Sidebar"
            >
              <div className=" px-2">
                {items.map((item, index) => (
                  <LinkComponent
                    item={item}
                    key={index}
                    setSidebarOpen={setSidebarOpen}
                  />
                ))}
              </div>
            </nav>
          </div>
        </Transition.Child>
        <div className="w-14 flex-shrink-0" aria-hidden="true">
          {/* Dummy element to force sidebar to shrink to fit close icon */}
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default MobileNav;

const LinkComponent = ({ item, setSidebarOpen }) => {
  const router = useRouter();
  const [active, setActive] = useState(false);

  const contentRef = useRef();
  const containerRef = useRef();

  return (
    <Link href={item.link || ""}>
      <span
        onClick={() => setActive(!active)}
        className={`flex items-center text-center relative w-full cursor-pointer  ${
          router.pathname === item.link && "active"
        }`}
      >
        <a
          onClick={item?.haveSubmenu ? () => {} : () => setSidebarOpen(false)}
          className={
            `text-lg duration-500 font-medium text-center block w-[80%] m-auto my-2 py-2  ${
              router.pathname === item.link
              ? " relative bg-white rounded-full text-primary"
              : " text-white "
            }`
          }
        >
          {item.name}
        </a>
        {item.haveSubmenu && active && (
          <span className={`
          w-[13rem] p-3 bg-primary top-[100%] transform absolute flex flex-col z-50 rounded shadow-lg font-semibold duration-500 border border-white ${
            active
              ? "opacity-100 pointer-events-auto translate-y-[-0.5rem]"
              : "opacity-0 pointer-events-none translate-y-[2rem]"
          }`}>
            {item.subMenu.map((subItem, index) => (
              <>
                <span
                  className="text-primary-light text-lg hover:text-white duration-500 my-2"
                  onClick={() => setSidebarOpen(false)}
                  ref={contentRef}
                  key={index}
                >
                  {subItem.name}
                </span>
                
              </>
            ))}
          </span>
        )}
      </span>
    </Link>
  );
};
