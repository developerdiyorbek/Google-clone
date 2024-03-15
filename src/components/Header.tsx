"use client";

// icons
import { RiMenuFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { ImLab } from "react-icons/im";
import { VscAccount } from "react-icons/vsc";
import { FaGooglePlay } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { SiGooglemeet } from "react-icons/si";
import { SiGooglechat } from "react-icons/si";
import { FcContacts } from "react-icons/fc";
import { FaGoogleDrive } from "react-icons/fa";
import { SiGooglecalendar } from "react-icons/si";
import { SiGoogletranslate } from "react-icons/si";
import { SiGooglephotos } from "react-icons/si";
import { IoIosAddCircle } from "react-icons/io";
import { PiSignOutBold } from "react-icons/pi";
//
import Link from "next/link";
import Image from "next/image";
import userImg from "/public/userImg.jpg";
import { useState } from "react";

const headerLinks = [
  {
    id: 1,
    text: "Gmail",
    to: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox",
  },
  {
    id: 2,
    text: "Images",
    to: "https://www.google.com/imghp?hl=en&tab=ri&ogbl",
  },
  {
    id: 3,
    text: (
      <>
        <ImLab size={25} />
      </>
    ),
    to: "https://labs.google.com/search/experiments?source=ntp",
  },
];

const googleApps = [
  {
    id: 1,
    icon: (
      <>
        <VscAccount size={25} />
      </>
    ),
    title: "Account",
  },
  {
    id: 2,
    icon: (
      <>
        <FcGoogle size={25} />
      </>
    ),
    title: "Search",
  },
  {
    id: 3,
    icon: (
      <>
        <FaGooglePlay size={25} />
      </>
    ),
    title: "Play",
  },
  {
    id: 4,
    icon: (
      <>
        <FaRegNewspaper size={25} />
      </>
    ),
    title: "News",
  },
  {
    id: 5,
    icon: (
      <>
        <BiLogoGmail size={25} />
      </>
    ),
    title: "Gmail",
  },
  {
    id: 6,
    icon: (
      <>
        <SiGooglemeet size={25} />
      </>
    ),
    title: "Meet",
  },
  {
    id: 7,
    icon: (
      <>
        <SiGooglechat size={25} />
      </>
    ),
    title: "Chat",
  },
  {
    id: 8,
    icon: (
      <>
        <FcContacts size={25} />
      </>
    ),
    title: "Contact",
  },
  {
    id: 9,
    icon: (
      <>
        <FaGoogleDrive size={25} />
      </>
    ),
    title: "Drive",
  },
  {
    id: 10,
    icon: (
      <>
        <SiGooglecalendar size={25} />
      </>
    ),
    title: "Calendar",
  },
  {
    id: 11,
    icon: (
      <>
        <SiGoogletranslate size={25} />
      </>
    ),
    title: "Translate",
  },
  {
    id: 12,
    icon: (
      <>
        <SiGooglephotos size={25} />
      </>
    ),
    title: "Photos",
  },
];

const Header = () => {
  const [showHamburgerModal, setShowHamburberModal] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false);

  // {
  //   window.addEventListener("click", (e) => {
  //     if (e.target.classList[0] === "main") {
  //       setShowHamburberModal(false);
  //       setShowUserModal(false);
  //     }
  //   });
  // }

  return (
    <header className="w-full py-3 px-4">
      <div className="w-full flex items-center justify-end gap-1">
        {headerLinks.map((link) => (
          <Link
            className={`text-white p-3 rounded-full duration-150 ${
              link.id !== 3 ? "hover:underline " : "hover:bg-[#0000001a]"
            }`}
            href={link.to}
            key={link.id}
            target="_blank"
          >
            {link.text}
          </Link>
        ))}
        <div className="relative">
          <button
            className={`text-white p-2 hover:bg-[#0000001a] rounded-full ${
              showHamburgerModal ? "bg-[#0000001a]" : ""
            }`}
            onClick={() => {
              setShowHamburberModal(!showHamburgerModal);
              setShowUserModal(false);
            }}
          >
            <RiMenuFill size={25} />
          </button>
          <div
            className={`absolute top-12 right-2 bg-[#202124] rounded-[30px] border-[10px]  border-[#373839] ${
              showHamburgerModal ? "" : "hidden"
            }`}
          >
            <div className="text-white p-2 overflow-y-auto h-[300px] grid grid-cols-3 w-[300px] pt-8 gap-x-8 gap-y-10">
              {googleApps.map((app) => (
                <Link href={"#"} key={app.id} className="text-center">
                  <span className="flex justify-center mb-1">{app.icon}</span>
                  <p>{app.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="relative">
          <button
            className={`p-1 hover:bg-[#0000001a] rounded-full ml-4 ${
              showUserModal ? "bg-[#0000001a]" : ""
            }`}
            onClick={() => {
              setShowUserModal(!showUserModal);
              setShowHamburberModal(false);
            }}
          >
            <Image
              src={userImg}
              alt="userImg"
              className={`w-[40px] h-[40px] rounded-full `}
            />
          </button>
          <div
            className={`absolute top-14 right-2 p-[20px] bg-[#373839] rounded-[20px]   ${
              showUserModal ? "" : "hidden"
            }`}
          >
            <div className="flex  justify-between items-center mb-3">
              <div></div>
              <p className="text-gray-300 mr-5">
                diyorbeksulaymonov70@gmail.com
              </p>
              <button
                className="text-white text-[16px] py-1 px-2 rounded hover:bg-[#0000001a] duration-150"
                onClick={() => setShowUserModal(false)}
              >
                X
              </button>
            </div>
            <div className="text-center mb-4">
              <Image
                src={userImg}
                alt="userImg"
                className="rounded-full w-[90px] h-[90px] mx-auto mb-2"
              />
              <p className="text-lg text-white mb-3">Hi, Sulaymonov!</p>
              <button className="border rounded-[10px] hover:bg-[#3f4041] text-blue-500 py-2 px-3">
                Manage your google account
              </button>
            </div>
            <div className="w-full flex items-center justify-between">
              <button className="flex items-center gap-1 py-4 px-5 rounded-md bg-[#1a1b1b] text-white">
                <IoIosAddCircle size={23} />
                <span>Add account</span>
              </button>
              <button className="flex items-center gap-1 py-4 px-5 rounded-md bg-[#1a1b1b] text-white">
                <PiSignOutBold size={23} />
                <span>Sign out</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
