import React, { useState } from "react";

import "./style.css";
 
//fonts

import "./Fonts/Inter-Regular.ttf"

const NavBarWithIcons = () => {

  const [icons, setIcons] = useState("");

  const [open, setOpen] = useState("");

  const [close, setClose] = useState("");

  return (

    <header>
      <div className="container">

        <div className="logo">

          <h2>News Guru</h2>

        </div>

        <div className="icons">

          <span

            className="open"

            onClick={() => {

              setIcons(!icons);

              setClose(!close);

              setOpen(!open);
            }}
          >
            {open || <i class="ri-menu-2-line"></i>}

          </span>

          <span
            className="close"

            onClick={() => {

              setIcons(!icons);

              setOpen(!open);

              setClose(!close);

            }}
          >
            {close && <i class="ri-close-fill"></i>}

          </span>

        </div>

        <div>{icons && <Menu />}</div>

      </div>

    </header>

  );
  
};

const Menu = () => {
  return (
    <ul className="menu">
      <li>
        <a href="#">Home</a>
      </li>

      <li>
        <a href="#">About</a>
      </li>

      <li>
        <a href="#">Designs</a>
      </li>

      <li>
        <a href="#">References</a>
      </li>

      <li>
        <a href="#">Sign Up</a>
      </li>
    </ul>
  );
};

const FullScreen = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <h2>Tech Fest</h2>
        </div>

        <div>
          <ul className="full-menu">
            <li>
              <a href="#">Home</a>
            </li>

            <li>
              <a href="#">About</a>
            </li>

            <li>
              <a href="#">Designs</a>
            </li>

            <li>
              <a href="#">References</a>
            </li>

            <li>
              <a href="#">Sign Up</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

const Screen = () => {
  
  const [size, setSize] = useState(window.innerWidth);

  const adjustSize = () => {
    setSize(window.innerWidth);
  };

  useState(() => {
    window.addEventListener("resize", adjustSize);

    return () => {
      window.removeEventListener("resize", adjustSize);
    };
  });

  if (size < 3000 && size > 750) {
    return <FullScreen />;
  }

  return <NavBarWithIcons />;
};

export default Screen;


