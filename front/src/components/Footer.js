import React from 'react'
import logo from '../images/logo.svg'
function Footer() {
  return (
      <>
      <section className="widget-section padding">
        <div className="container">
          <div className="widget-wrap row">
            <div className="col-md-4 xs-padding">
              <div className="widget-content">
                <img
                  src="https://html.dynamiclayers.net/dl/charitify/img/logo-light.png"
                  alt="logo"
                />
                <p>
                  The secret to happiness lies in helping others. Never
                  underestimate the difference YOU can make in the lives of the
                  poor
                </p>
                <ul className="social-icon">
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-pinterest"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 xs-padding">
              <div className="widget-content">
                <h3>Recent Campaigns</h3>
                <ul className="widget-link">
                  <li>
                    <a href="#">
                      First charity activity of this summer.{" "}
                      <span>-1 Year Ago</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Big charity: build school for poor children.{" "}
                      <span>-2 Year Ago</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Clean-water system for rural poor.{" "}
                      <span>-2 Year Ago</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Nepal earthqueak donation campaigns.{" "}
                      <span>-3 Year Ago</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 xs-padding">
              <div className="widget-content">
                <h3>Charitify Location</h3>
                <ul className="address">
                  <li>
                    <i class="fa-regular fa-envelope"></i> Info@YourDomain.com
                  </li>
                  <li>
                    <i class="fa-solid fa-phone"></i> +(333) 052 39876
                  </li>
                  <li>
                    <i class="fa-regular fa-globe"></i> Www.YourWebsite.com
                  </li>
                  <li>
                    <i class="fa-solid fa-location-dot"></i> 60 Grand Avenue.
                    Central New Road 0708, USA
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 sm-padding">
              <div className="copyright">
                &copy; 2021 Charitify Powered by DynamicLayers
              </div>
            </div>
            <div className="col-md-6 sm-padding">
              <ul className="footer-social">
                <li>
                  <a href="#">Orders</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Report Problem</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      </>
   
  )
}

export default Footer