import React, { useState } from "react";
import images from "../../constants/images";
import "./navbar.scss";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        {/* <img src={images.logo} alt="logo" /> */}

        <a href="#" id="home">
          <h2>&lt;Raj_kd /&gt;</h2>
        </a>
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((item) => {
          return (
            <li className="app__flex p-text" key={"link-" + item}>
              <div></div>
              <a href={`#${item}`}>{item} </a>
            </li>
          );
        })}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [400, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)}></HiX>
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => {
                return (
                  <li className="app__flex p-text" key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}{" "}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
