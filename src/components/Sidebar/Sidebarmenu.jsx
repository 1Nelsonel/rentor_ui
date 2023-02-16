import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink, Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

const menuAnimation = {
  hidden: {
    opacity: 0,
    hight: 0,
    padding: 0,
    transition: { duration: 0.3, when: "afterChildren" },
  },

  show: {
    opacity: 1,
    height: AuthenticatorAssertionResponse,
    transition: {
      duration: 0.3,
      when: "beforeChildren",
    },
  },
};
const MenuItemAnimation = {
  hidden: (i) => ({
    padding: 0,
    x: "-100%",
    transition: {
      duration: (i + 1) * 0.1,
    },
  }),
  show: (i) => ({
    x: 0,
    transition: {
      duration: (i + 1) * 0.1,
    },
  }),
};

const Sidebarmenu = () => {
  return (
    <>
      <div className="menu">
        <div className="menu_item">
          <div className="icons">
            <AnimatePresence>
                <motion.div
                    varuants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="link_text"
                >

                </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      Sidebarmenu
    </>
  );
};

export default Sidebarmenu;
