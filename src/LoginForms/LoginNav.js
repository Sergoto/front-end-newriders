import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./LoginNav.css";

function LoginNav() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Mind Over Matter
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/register" className="nav-links" onClick={closeMobileMenu}>
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/login"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/forgot"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                PassWord Reset
              </Link>
            </li>
                <li className="nav-item">
              <Link
                to="/forgotuser"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Username Recovery
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default LoginNav;
