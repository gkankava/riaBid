import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ll from "../../assets/logo-light.svg";
import ld from "../../assets/logo-def.svg";
import search from "../../assets/icons/search.svg";
import searchDark from "../../assets/icons/search-dark.svg";
import user from "../../assets/icons/user.svg";
import userDark from "../../assets/icons/user-dark.svg";
import hamburger from "../../assets/icons/hamburger.svg";
import hamburgerDark from "../../assets/icons/hamburger-dark.svg";
import { userProvider } from "../../store/store";

import Modal from "./modal";

function Navbar() {
  const { currentUser } = userProvider();
  const [navActive, setNavActive] = useState(false);
  const [authActive, setAuthActive] = useState(false);
  const [vW, setVW] = useState(0);
  const [authModalActive, setAuthModalActive] = useState({
    login: false,
    register: false,
  });

  React.useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);

  const pathName = useLocation().pathname || null;
  React.useEffect(() => {
    setVW(window.innerWidth);
    window.addEventListener("resize", () => {
      setVW(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setVW(window.innerWidth);
      });
    };
  }, []);

  return (
    <header>
      <div className="container">
        <a href="/">
          <img className="logo" src={pathName === "/" ? ll : ld} alt="logo" />
        </a>
        <nav className={navActive ? "nav-active" : null}>
          <div
            className={navActive ? "overlay" : null}
            onClick={() => setNavActive(false)}
          />
          <div className="list-container">
            <div className="nav-login-container">
              <button
                className="btn-signin"
                onClick={() => {
                  setAuthModalActive({ login: true, register: false });
                  setNavActive(false);
                }}
              >
                SIGN IN
              </button>
              <p style={{ fontSize: "16px" }}>or</p>
              <button
                className="btn-create"
                onClick={() => {
                  setAuthModalActive({ login: false, register: true });
                  setNavActive(false);
                }}
              >
                CREATE
              </button>
            </div>
            <ul>
              <li>
                <NavLink
                  to={`/store`}
                  activeClassName="active-item"
                  style={{
                    color:
                      pathName !== "/"
                        ? "black"
                        : vW <= 768 && pathName === "/"
                        ? "black"
                        : "white",
                  }}
                >
                  Women
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/store`}
                  activeClassName="active-item"
                  style={{
                    color:
                      pathName !== "/"
                        ? "black"
                        : vW <= 768 && pathName === "/"
                        ? "black"
                        : "white",
                  }}
                >
                  Men
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/store`}
                  activeClassName="active-item"
                  style={{
                    color:
                      pathName !== "/"
                        ? "black"
                        : vW <= 768 && pathName === "/"
                        ? "black"
                        : "white",
                  }}
                >
                  Fragrances
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/store`}
                  activeClassName="active-item"
                  style={{
                    color:
                      pathName !== "/"
                        ? "black"
                        : vW <= 768 && pathName === "/"
                        ? "black"
                        : "white",
                  }}
                >
                  Beauty
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/store`}
                  activeClassName="active-item"
                  style={{
                    color:
                      pathName !== "/"
                        ? "black"
                        : vW <= 768 && pathName === "/"
                        ? "black"
                        : "white",
                  }}
                >
                  Books
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/store`}
                  activeClassName="active-item"
                  style={{
                    color:
                      pathName !== "/"
                        ? "black"
                        : vW <= 768 && pathName === "/"
                        ? "black"
                        : "white",
                  }}
                >
                  Sale
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <div className="btn-container">
          <img
            className="search-btn"
            src={pathName === "/" ? search : searchDark}
            alt="search-btn"
          />
          <div className="account-wrapper">
            <img
              className="user-btn"
              src={pathName === "/" ? user : userDark}
              alt="user-btn"
              onClick={() => setAuthActive(!authActive)}
            />
            <div
              className={authActive ? "triangle triangle-active" : "triangle"}
            />
            <div
              className={
                authActive
                  ? "account-in-container account-in-container-active"
                  : "account-in-container"
              }
            >
              <button
                className="btn-signin"
                onClick={() => {
                  setAuthModalActive({ login: true, register: false });
                  setAuthActive(false);
                }}
              >
                SIGN IN
              </button>
              <p style={{ fontSize: "16px" }}>or</p>
              <button
                className="btn-create"
                onClick={() => {
                  setAuthModalActive({ login: false, register: true });
                  setAuthActive(false);
                }}
              >
                CREATE
              </button>
            </div>
          </div>
          <img
            className="hamburger"
            src={pathName === "/" ? hamburger : hamburgerDark}
            alt="hamburger"
            onClick={() => setNavActive(!navActive)}
          />
        </div>
        {authModalActive.login || authModalActive.register ? (
          <Modal
            type={authModalActive}
            setAuthModalActive={setAuthModalActive}
          />
        ) : null}
      </div>
    </header>
  );
}

export default Navbar;
