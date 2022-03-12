import React, {useContext} from "react";
import logo from "../images/logo.svg";
import { makeStyles } from "@mui/styles";
import { ThemeContext } from "../ThemeContext";


function Header() {
//   const classes = useStyles();
  const {darkMode, setDarkMode} = useContext(ThemeContext) ;
  return (
      <>
      <header id="header" className="header-section">
        <div className="bottom-header">
          <div className="container">
            <div className="bottom-content-wrap row">
              <div className="col-sm-4">
                <div className="site-branding">
                  <a href="#">
                    <img
                      src="https://html.dynamiclayers.net/dl/charitify/img/logo.png"
                      alt="Brand"
                    />
                  </a>
                </div>
              </div>
              <div className="col-sm-8 text-right">
                <ul id="mainmenu" className="nav navbar-nav nav-menu">
                  <li className="active">
                    {" "}
                    <a href="/">Home</a>
                    {/* <ul>
                      <li>
                        <a href="/">Home Default</a>
                      </li>
                      <li>
                        <a href="index-2.html">Home Modern</a>
                      </li>
                    </ul> */}
                  </li>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/causes">Causes</a>
                  </li>
                  <li>
                    <a href="/event">Event</a>
                  </li>
                  {/* <li>
                    <a href="#">Pages</a>
                    <ul>
                      <li>
                        <a href="gallery.html">Gallery</a>
                      </li>
                      <li>
                        <a href="team.html">Volunteers</a>
                      </li>
                      <li>
                        <a href="404.html">404 Not Found</a>
                      </li>
                    </ul>
                  </li> */}
                  <li>
                    <a href="/blog">Blog</a>
                    {/* <ul>
                      <li>
                        <a href="blog-grid.html">Blog Grid</a>
                      </li>
                      <li>
                        <a href="blog-left-sidebar.html">Blog Left Sidebar</a>
                      </li>
                      <li>
                        <a href="blog-right-sidebar.html">Blog Right Sidebar</a>
                      </li>
                      <li>
                        <a href="blog-single.html">Blog Single</a>
                      </li>
                    </ul> */}
                  </li>
                  <li>
                    {" "}
                    <a href="/contact">Contact</a>
                  </li>
                  <li>
                    {" "}
                    <a href="/signup">SignUp</a>
                  </li>
                </ul>
                <a href="/donate" className="default-btn">
                  Donate Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="header-height"></div>
      
      </>
     
  );
}

export default Header;
