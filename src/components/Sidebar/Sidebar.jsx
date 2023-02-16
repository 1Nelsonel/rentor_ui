import React, { useState } from "react";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiCog } from "react-icons/bi";
import { AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/Users/",
    name: "Users",
    icon: <FaUser />,
  },
  {
    path: "/Message/",
    name: "Message",
    icon: <MdMessage />,
  },
  {
    path: "/Analytics/",
    name: "Analytics",
    icon: <BiAnalyse />,
  },
  {
    path: "/FileManager/",
    name: "FileManager",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Profile",
        icon: <FaUser />,
      },
      {
        path: "settings/2fa",
        name: "2AF",
        icon: <FaLock />,
      },
      {
        path: "settings/billing",
        name: "Billing",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/orders/",
    name: "orders",
    icon: <BsCartCheck />,
  },
  {
    path: "/Settings/",
    name: "Settings",
    icon: <BiCog />,
    exact: true,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Profile",
        icon: <FaUser />,
      },
      {
        path: "settings/2fa",
        name: "2AF",
        icon: <FaLock />,
      },
      {
        path: "settings/billing",
        name: "Billing",
        icon: <FaMoneyBill />,
      },
    ],
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
      show: {
        width: "140px",
        padding: "5px 15px",
        transition: {
          duration: 0.2,
        },
      },
    },
  };
  const ShowAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "auto",
      opacity: "1",
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <>
      <motion.div
        animate={{
          width: isOpen ? "250" : "45",
          transition: {
            duration: 0.5,
            type: "spring",
            damping: 10,
          },
        }}
        className="main-container"
      >
        <div className={`sidebar`}>
          <div className="top-section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={ShowAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  Rentor
                </motion.h1>
              )}
            </AnimatePresence>
          </div>
          <div className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
