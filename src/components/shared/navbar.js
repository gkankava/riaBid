import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import ll from "../../assets/logo-light.svg";
import ld from "../../assets/logo-def.svg";
import plus from "../../assets/icons/plus.svg";
import pluspride from "../../assets/pluspride.svg";

import ln from "../../assets/logo-new.svg";
import ria from "../../assets/riabid.svg";
import arrow from "../../assets/icons/arrow-down.svg";
import arrowbl from "../../assets/icons/arrow-black.svg";
import search from "../../assets/icons/search.svg";
import searchDark from "../../assets/icons/search-dark.svg";
import cart from "../../assets/cart-light.svg";
import cartDark from "../../assets/cart-dark.svg";
import user from "../../assets/icons/user.svg";
import userDark from "../../assets/icons/user-dark.svg";
import favorites from "../../assets/icons/favorites.svg";
import hamburgerDark from "../../assets/icons/hamburger-dark.svg";
import { userProvider } from "../../store/store";

import Modal from "./modal";
import { logout } from "../../services/authService";

function Navbar() {
  const { currentUser } = userProvider();
  const [navActive, setNavActive] = useState(false);
  const [authActive, setAuthActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [vW, setVW] = useState(0);
  const [authModalActive, setAuthModalActive] = useState({
    login: false,
    register: false,
  });

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

  const searchRef = useRef(null);

  return (
    <header>
      <div className="container">
        <a className="logo-container" href="/">
          <img className="logo" src={ln} alt="logo" />
        </a>
        <nav className={navActive ? "nav-active" : null}>
          <div className="overlay" onClick={() => setNavActive(false)} />
          <div className="list-container">
            {currentUser.isAuthenticated ? (
              <div className="nav-login-container">
                <Link onClick={() => setNavActive(false)} to="/dashboard">
                  Go To Dashboard
                </Link>
                <button
                  className="btn-create"
                  onClick={() => {
                    logout();
                    window.location.href = "/";
                  }}
                >
                  LOG OUT
                </button>
              </div>
            ) : (
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
            )}

            <ul>
              <li>
                <NavLink
                  to={`/artists`}
                  activeClassName="active-item"
                  style={{
                    color: pathName == "/artists" ? "#fbb03b " : "black",
                  }}
                >
                  ARTISTS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/store`}
                  activeClassName="active-item"
                  style={{
                    color: pathName == "/store" ? "#fbb03b " : "black",
                  }}
                >
                  ARTWORKS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/auctions`}
                  activeClassName="active-item"
                  style={{
                    color: pathName == "/auctions" ? "#fbb03b " : "black",
                  }}
                >
                  AUCTIONS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/galleries`}
                  activeClassName="active-item"
                  style={{
                    color: pathName == "/galleries" ? "#fbb03b " : "black",
                  }}
                >
                  GALLERIES
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <div className="btn-container">
          <Link style={{ height: "19px" }} to="/search">
            <img
              style={{ height: 19 }}
              className="cart-btn"
              src={searchDark}
              alt="search-btn"
            />
          </Link>

          {currentUser.isAuthenticated ? (
            <Link style={{ height: "22px" }} to="/dashboard/addartwork">
              <img className="cart-btn" src={plus} alt="search-btn" />
            </Link>
          ) : null}

          {currentUser.isAuthenticated ? (
            <Link style={{ height: "22px" }} to="/cart">
              <img className="cart-btn" src={cartDark} alt="search-btn" />
            </Link>
          ) : null}

          {currentUser.isAuthenticated ? (
            <div style={{ display: "flex" }}>
              <Link style={{ height: "22px" }} to="/dashboard/favorites">
                <img
                  className="s"
                  style={{ height: "22px" }}
                  src={pathName === "/" ? favorites : favorites}
                  alt="hamburger"
                />
              </Link>
              <div className="account-wrapper">
                <img
                  className="user-btn"
                  src={pathName === "/" ? userDark : userDark}
                  alt="user-btn"
                  onClick={() => setAuthActive(!authActive)}
                />
                <div
                  className={
                    authActive ? "triangle triangle-active" : "triangle"
                  }
                />
                <div
                  className={
                    authActive
                      ? "account-in-container account-in-container-active"
                      : "account-in-container"
                  }
                >
                  <Link onClick={() => setAuthActive(false)} to="/dashboard">
                    Go To Dashboard
                  </Link>
                  <button
                    className="btn-create"
                    onClick={() => {
                      logout();
                      window.location.href = "/";
                    }}
                  >
                    LOG OUT
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="account-wrapper">
              <img
                className="user-btn"
                src={pathName === "/" ? userDark : userDark}
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
                    setAuthModalActive({
                      login: true,
                      register: false,
                      forgot: false,
                    });
                    setAuthActive(false);
                  }}
                >
                  SIGN IN
                </button>
                <p style={{ fontSize: "16px" }}>or</p>
                <button
                  className="btn-create"
                  onClick={() => {
                    setAuthModalActive({
                      login: false,
                      register: true,
                      forgot: false,
                    });
                    setAuthActive(false);
                  }}
                >
                  CREATE
                </button>
              </div>
            </div>
          )}
          <img
            className="hamburger"
            src={pathName === "/" ? hamburgerDark : hamburgerDark}
            alt="hamburger"
            onClick={() => setNavActive(!navActive)}
          />
        </div>
        {authModalActive.login ||
        authModalActive.register ||
        authModalActive.forgot ? (
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
