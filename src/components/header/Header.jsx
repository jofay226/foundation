import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import "./Header.scss";

const Header = () => {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const dynamicMenuRef = useRef();
  const burgerMenuBtn = useRef();
  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (
        !dynamicMenuRef?.current?.contains(e.target) &&
        !burgerMenuBtn?.current?.contains(e.target)
      ) {
        setBurgerMenu(false);
      }
    });
  }, []);
  return (
    <>
      {burgerMenu && (
        <div ref={dynamicMenuRef} className="dynamic-menu">
          <ul className="dynamic-menu-list">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/aboutus">About Us</a>
            </li>
            <li>
              <a href="/aboutcourse">About Course</a>
            </li>
            <li>
              <a href="/contactus">Contact Us</a>
            </li>
          </ul>
        </div>
      )}
      <header className="wrapper-header">
        <div className="wrapper-header-inner">
          <div className="wrapper-header-inner-content">
            <h1>IT AcademY</h1>
            <div
              ref={burgerMenuBtn}
              className={`wrapper-header-inner-content-menu ${
                burgerMenu ? "active" : ""
              } `}
              onClick={() => setBurgerMenu((prev) => !prev)}
            >
              <div className="line1"></div>
              <div className="line2"></div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
