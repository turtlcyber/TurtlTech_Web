import React, { useState } from "react";
import "./styles/header.css";
import "../components/styles/scss";
import "../components/styles/animate.css";
import logo from "../../src/assets/img/logo-default1.png";
import darkLogo from "../assets/img/logowhite.png";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginFormFnOpen } from "../redux/R_Action";
import {GoogleLogout} from "react-google-login";

const Header = () => {
  const [color, setColor] = useState(false);
  let clientId = "1071769691163-9qm1qs54a9vu2hst6muc7uinvvradtp0.apps.googleusercontent.com";
  const location = useLocation();
  const dispatch = useDispatch();
  const {userAuthObj} = useSelector(state => state);
  const loginFlag = false;
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  if(userAuthObj.email_verified){
    window.addEventListener("mouseup", function(e){
      var userMenu = this.document.getElementById('usermenudiv');
      if(e.target != userMenu || e.target.parentNode != userMenu){
        userMenu.style.display ='none';
      }
    })
  }
  window.addEventListener("scroll", changeColor);
  
  const styles = {
    scroll: {
      backgroundColor: "#0619c3",
    },
    height:'50px',
    noScroll: {
      backgroundColor: "white",
    },
    font_color: {
      color: "white",
    },
  };

  const onSuccess = () => {
    console.log("Logout successfull");
  }

  
  return (
    <header
      style={styles.noScroll}
      className="page-header header-basic border-bottom"
      id="page-header"
    >
      <div className="header-search-box">
        <div className="close-search"></div>
        <form
          className="nav-search search-form"
          role="search"
          method="get"
          action="#"
        >
          <div className="search-wrapper">
            <label className="search-lbl">Search for:</label>
            <input
              className="search-input"
              type="search"
              placeholder="Search..."
              name="searchInput"
              autoFocus
            />
            <button className="search-btn" type="submit">
              <i className="bi bi-search icon"></i>
            </button>
          </div>
        </form>
      </div>
      <div className="container">
        <nav className="menu-navbar">
          <div className="header-logo" style={{height:'50px'}}>
            <Link className="logo-link" to="/">
              {<img src={darkLogo} className="logo-img dark-logo" />}
            </Link>
          </div>
          <div className="links" style={{height:'50px', marginLeft:'auto'}}>
            <ul
              className="list-js links-list"
              style={{color:'black', height:"50px"}}
            >
              <li className="menu-item has-sub-menu">
                <Link
                  className={
                    location.pathname === "/" ? "menu-link active" : "menu-link"
                  }
                  to="/"
                >
                  home{" "}
                </Link>
              </li>
              <li className="menu-item">
                <Link
                  className={
                    location.pathname === "/aboutus"
                      ? "menu-link active"
                      : "menu-link"
                  }
                  to="/aboutus"
                >
                  about us{" "}
                </Link>
              </li>
              <li className="menu-item has-sub-menu">
                <Link
                  className={
                    location.pathname === "/services"
                      ? "menu-link active"
                      : "menu-link"
                  }
                  to="/services"
                >
                  services
                </Link>
              </li>

              <li className="menu-item has-sub-menu">
                <Link
                  className={
                    location.pathname === "/blog"
                      ? "menu-link active"
                      : "menu-link"
                  }
                  to="/blog"
                >
                  blog
                </Link>
              </li>

              <li className="menu-item">
                <Link
                  className={
                    location.pathname === "/contact"
                      ? "menu-link active"
                      : "menu-link"
                  }
                  to="contact"
                >
                  contact us
                </Link>
              </li>
              <li className="menu-item">
                <Link
                  className={
                    location.pathname === "/faq"
                      ? "menu-link active"
                      : "menu-link"
                  }
                  to="faq"
                >
                  FAQ
                </Link>
              </li>
              <li className="menu-item has-sub-menu">
                <Link
                  className={
                    location.pathname === "/sales"
                      ? "menu-link active"
                      : "menu-link"
                  }
                  to="/sales"
                >
                  talk to Sales
                </Link>
              </li>
              {
                !userAuthObj.email_verified
                ? <button className="ms-3 btn btn-primary" onClick={() => dispatch(loginFormFnOpen())}>Login</button> : (
                  <div className="ms-3 position-relative" role="button" onClick={() => document.getElementById('usermenudiv').style.display = "block"}>
                  <img src={userAuthObj.picture} width={40} className="rounded-circle border"/>
                  <div id="usermenudiv" className="border rounded bg-white position-absolute mt-1 end-0 text-start p-2" style={{ width:'230px', display:'none'}}>
                     <div className="p-2 usermenu">
                      <h6 className="p-0 m-0">{userAuthObj.name}</h6>
                      <span>@{userAuthObj.sub}</span>
                     </div>
                     <hr className="my-1"/>
                     <div className="p-2 usermenu">
                      <GoogleLogout
                      clientId={clientId}
                      buttonText="Logout"
                      onLogoutSuccess={onSuccess}
                      />
                     </div>
                  </div>
              </div>
                )
              }
              
             
                
            </ul>
            
          </div>
          <div className="controls-box">
            <div className="control menu-toggler">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
