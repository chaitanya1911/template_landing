import React, { useContext } from "react";
import featureIcon01 from "../images/feature-icon-01.svg";
import featureIcon02 from "../images/feature-icon-02.svg";
import featureIcon03 from "../images/feature-icon-03.svg";
import featureIcon04 from "../images/feature-icon-04.svg";
import featureIcon05 from "../images/feature-icon-05.svg";
import featureIcon06 from "../images/feature-icon-06.svg";
import { makeStyles } from "@mui/styles";
import { Col, Navbar, Row } from "react-bootstrap";
import { ThemeContext } from "../ThemeContext";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
  siteHeader: {
    position: "relative",
    paddingTop: "30px",
    "&::before": {
      content: "''",
      position: "absolute",
      top: -90,
      left: 0,
      width: "100%",
      height: "770px",
      marginTop: "40px",
      background: "#242830",
      // background: 'linear-gradient(80deg, rgba(36,40,48,0.5) 0%, rgba(36,40,48,0) 100%)',
      "-webkit-transform-origin": 0,
      "transform-origin": 0,
      "-webkit-transform": "skewY(-12deg)",
    },
  },
  siteHeaderDark: {
    position: "relative",
    paddingTop: "30px",
    "&::before": {
      content: "''",
      position: "absolute",
      top: -90,
      left: 0,
      width: "100%",
      height: "770px",
      marginTop: "40px",
      background: "white",
      //  background: 'linear-gradient(80deg,rgba(36, 40, 48, 0.5) 0%,rgba(36, 40, 48, 0) 100%)',
      "-webkit-transform-origin": 0,
      "transform-origin": 0,
      "-webkit-transform": "skewY(-12deg)",
      transform: "skewY(-12deg)",
    },
  },
});
function LandingPage() {
  const classes = useStyles();
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url('https://html.dynamiclayers.net/dl/charitify/img/slider-2.jpg')",
          height: "650px",
        }}
      >
        <div className="display-table">
          <div className="table-cell">
            <div className="container">
              <div className="slider-text">
                <h5 className="wow cssanimation fadeInBottom">Join Us Today</h5>
                <h1 className="wow cssanimation leFadeInRight sequence">
                  Better Life for People
                </h1>
                <p className="wow cssanimation fadeInTop" data-wow-delay="1s">
                  Help today because tomorrow you may be the one who needs
                  helping! <br />
                  Forget what you can get and see what you can give.
                </p>
                <a
                  href="#"
                  className="default-btn wow cssanimation fadeInBottom"
                  data-wow-delay="0.8s"
                  style={{ marginRight: "10px" }}
                >
                  Join With Us
                </a>
                <a
                  href="#"
                  className="default-btn wow cssanimation fadeInBottom"
                  data-wow-delay="0.8s"
                >
                  Donet Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section
        className="slider-section"
        style={{
          backgroundImage:
            "url('https://html.dynamiclayers.net/dl/charitify/img/slider-2.jpg')",
        }}
      >
        <div className="slider-wrapper">
          <div id="main-slider" className="nivoSlider">
            <img
              src="https://html.dynamiclayers.net/dl/charitify/img/slider-1.jpg"
              alt=""
              title="#slider-caption-1"
            />
            <img
              src="https://html.dynamiclayers.net/dl/charitify/img/slider-2.jpg"
              alt=""
              title="#slider-caption-2"
            />
            <img
              src="https://html.dynamiclayers.net/dl/charitify/img/slider-3.jpg"
              alt=""
              title="#slider-caption-3"
            />
          </div>

          <div
            id="slider-caption-1"
            className="nivo-html-caption slider-caption"
          >
            <div className="display-table">
              <div className="table-cell">
                <div className="container">
                  <div className="slider-text">
                    <h5 className="wow cssanimation fadeInBottom">
                      Join Us Today
                    </h5>
                    <h1 className="wow cssanimation leFadeInRight sequence">
                      Better Life for People
                    </h1>
                    <p
                      className="wow cssanimation fadeInTop"
                      data-wow-delay="1s"
                    >
                      Help today because tomorrow you may be the one who needs
                      helping! <br />
                      Forget what you can get and see what you can give.
                    </p>
                    <a
                      href="#"
                      className="default-btn wow cssanimation fadeInBottom"
                      data-wow-delay="0.8s"
                    >
                      Join With Us
                    </a>
                    <a
                      href="#"
                      className="default-btn wow cssanimation fadeInBottom"
                      data-wow-delay="0.8s"
                    >
                      Donet Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="slider-caption-2"
            className="nivo-html-caption slider-caption"
          >
            <div className="display-table">
              <div className="table-cell">
                <div className="container">
                  <div className="slider-text">
                    <h1
                      className="wow cssanimation fadeInTop"
                      data-wow-delay="1s"
                      data-wow-duration="800ms"
                    >
                      Together we <br />
                      can make a Difference
                    </h1>
                    <p
                      className="wow cssanimation fadeInBottom"
                      data-wow-delay="1s"
                    >
                      Help today because tomorrow you may be the one who needs
                      helping! <br />
                      Forget what you can get and see what you can give.
                    </p>
                    <a
                      href="#"
                      className="default-btn wow cssanimation fadeInBottom"
                      data-wow-delay="0.8s"
                    >
                      Join With Us
                    </a>
                    <a
                      href="#"
                      className="default-btn wow cssanimation fadeInBottom"
                      data-wow-delay="0.8s"
                    >
                      Donet Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="slider-caption-3"
            className="nivo-html-caption slider-caption"
          >
            <div className="display-table">
              <div className="table-cell">
                <div className="container">
                  <div className="slider-text">
                    <h5 className="wow cssanimation fadeInBottom">
                      Join Us Today
                    </h5>
                    <h1
                      className="wow cssanimation lePushReleaseFrom sequence"
                      data-wow-delay="1s"
                    >
                      Give a little. Change a lot.
                    </h1>
                    <p
                      className="wow cssanimation fadeInTop"
                      data-wow-delay="1s"
                    >
                      Help today because tomorrow you may be the one who needs
                      helping! <br />
                      Forget what you can get and see what you can give.
                    </p>
                    <a
                      href="#"
                      className="default-btn wow cssanimation fadeInBottom"
                      data-wow-delay="0.8s"
                    >
                      Join With Us
                    </a>
                    <a
                      href="#"
                      className="default-btn wow cssanimation fadeInBottom"
                      data-wow-delay="0.8s"
                    >
                      Donet Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="promo-section bd-bottom">
        <div className="promo-wrap">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-6 xs-padding">
                <div className="promo-content">
                  <img
                    src="https://html.dynamiclayers.net/dl/charitify/img/icon-1.png"
                    alt="prmo icon"
                  />
                  <h3>Make Donetion</h3>
                  <p>
                    Help today because tomorrow you may be the one who needs
                    helping!
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 xs-padding">
                <div className="promo-content">
                  <img
                    src="https://html.dynamiclayers.net/dl/charitify/img/icon-2.png"
                    alt="prmo icon"
                  />
                  <h3>Fundrising</h3>
                  <p>
                    Help today because tomorrow you may be the one who needs
                    helping!{" "}
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 xs-padding">
                <div className="promo-content">
                  <img
                    src="https://html.dynamiclayers.net/dl/charitify/img/icon-3.png"
                    alt="prmo icon"
                  />
                  <h3>Become A Volunteer</h3>
                  <p>
                    Help today because tomorrow you may be the one who needs
                    helping!{" "}
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="causes-section bg-grey bd-bottom padding">
        <div className="container">
          <div className="section-heading text-center mb-40">
            <h2>Recent Causes</h2>
            <span className="heading-border"></span>
            <p>
              Help today because tomorrow you may be the one who <br /> needs
              more helping!
            </p>
          </div>
          <div className="causes-wrap row">
            <div className="col-md-4 xs-padding">
              <div className="causes-content">
                <div className="causes-thumb">
                  <img
                    src="https://html.dynamiclayers.net/dl/charitify/img/causes-2.jpg"
                    alt="causes"
                  />
                  <a href="#" className="donate-btn">
                    Donate Now<i className="ti-plus"></i>
                  </a>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "25%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <span className="wow cssanimation fadeInLeft">25%</span>
                    </div>
                  </div>
                </div>
                <div className="causes-details">
                  <h3>First charity activity of this summer.</h3>
                  <p>
                    Help today because tomorrow you may be the one who needs
                    more helping!
                  </p>
                  <div className="donation-box">
                    <p>
                      <i className="ti-bar-chart"></i>Goal: $45000
                    </p>
                    <p>
                      <i className="ti-thumb-up"></i>Raised: $5000
                    </p>
                  </div>
                  <a href="#" className="read-more">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 xs-padding">
              <div className="causes-content">
                <div className="causes-thumb">
                  <img
                    src="https://html.dynamiclayers.net/dl/charitify/img/causes-2.jpg"
                    alt="causes"
                  />
                  <a href="#" className="donate-btn">
                    Donate Now<i className="ti-plus"></i>
                  </a>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "45%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <span className="wow cssanimation fadeInLeft">45%</span>
                    </div>
                  </div>
                </div>
                <div className="causes-details">
                  <h3>Big charity: build school for poor children.</h3>
                  <p>
                    Help today because tomorrow you may be the one who needs
                    more helping!
                  </p>
                  <div className="donation-box">
                    <p>
                      <i className="ti-bar-chart"></i>Goal: $45000
                    </p>
                    <p>
                      <i className="ti-thumb-up"></i>Raised: $5000
                    </p>
                  </div>
                  <a href="#" className="read-more">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 xs-padding">
              <div className="causes-content">
                <div className="causes-thumb">
                  <img
                    src="https://html.dynamiclayers.net/dl/charitify/img/causes-2.jpg"
                    alt="causes"
                  />
                  <a href="#" className="donate-btn">
                    Donate Now<i className="ti-plus"></i>
                  </a>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <span className="wow cssanimation fadeInLeft">75%</span>
                    </div>
                  </div>
                </div>
                <div className="causes-details">
                  <h3>Building clean-water system for rural poor.</h3>
                  <p>
                    Help today because tomorrow you may be the one who needs
                    more helping!
                  </p>
                  <div className="donation-box">
                    <p>
                      <i className="ti-bar-chart"></i>Goal: $45000
                    </p>
                    <p>
                      <i className="ti-thumb-up"></i>Raised: $5000
                    </p>
                  </div>
                  <a href="#" className="read-more">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section bd-bottom shape circle padding">
        <div className="container">
          <div className="row">
            <div className="col-md-4 xs-padding">
              <div className="profile-wrap">
                <img
                  className="profile"
                  src="https://html.dynamiclayers.net/dl/charitify/img/profile.jpg"
                  alt="profile"
                />
                <h3>
                  Jonathan Smith <span>CEO & Founder of Charitify.</span>
                </h3>
                <p>
                  The secret to happiness lies in helping others. Never
                  underestimate the difference YOU can make in the lives of the
                  poor, the abused and the helpless.
                </p>
                <img
                  src="https://html.dynamiclayers.net/dl/charitify/img/sign.png"
                  alt="sign"
                />
              </div>
            </div>
            <div className="col-md-8 xs-padding">
              <div className="about-wrap row">
                <div className="col-md-6 xs-padding">
                  <img
                    src="https://html.dynamiclayers.net/dl/charitify/img/history.jpg"
                    alt="about-thumb"
                  />
                  <h3>Our History</h3>
                  <p>
                    The secret to happiness lies in helping others. Never
                    underestimate the difference YOU can make in the lives of
                    the poor.
                  </p>
                  <a href="#" className="default-btn">
                    Read More
                  </a>
                </div>
                <div className="col-md-6 xs-padding">
                  <img
                    src="https://html.dynamiclayers.net/dl/charitify/img/mission.jpg"
                    alt="about-thumb"
                  />
                  <h3>Our Mission</h3>
                  <p>
                    The secret to happiness lies in helping others. Never
                    underestimate the difference YOU can make in the lives of
                    the poor.
                  </p>
                  <a href="#" className="default-btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="campaigns-section bd-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6 xs-padding">
              <div className="campaigns-wrap">
                <h4>Featured Campaigns</h4>
                <h2>Featured project to built a School.</h2>
                <p>
                  The secret to happiness lies in helping others. Never
                  underestimate the difference YOU can make in the lives of the
                  poor, the abused and the helpless.
                </p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "35%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span className="wow cssanimation fadeInLeft">35%</span>
                  </div>
                </div>
                <div className="donation-box">
                  <h3>
                    <i className="ti-bar-chart"></i>Goal: $450000
                  </h3>
                  <h3>
                    <i className="ti-thumb-up"></i>Raised: $55000
                  </h3>
                </div>
                <a href="#" className="default-btn">
                  Donate Now
                </a>
              </div>
            </div>
            <div className="col-md-6 xs-padding">
              <div className="video-wrap">
                <img
                  src="https://html.dynamiclayers.net/dl/charitify/img/video.jpg"
                  alt="video"
                />
                <div className="play">
                  <a
                    className="img-popup"
                    data-autoplay="true"
                    data-vbtype="video"
                    href="https://www.youtube.com/watch?v=_IlLwfC2dNc"
                  >
                    <i class="fa-solid fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section bg-grey bd-bottom circle shape padding">
        <div className="container">
          <div className="section-heading text-center mb-40">
            <h2>Meet Out Volunteers</h2>
            <span className="heading-border"></span>
            <p>
              Help today because tomorrow you may be the one who <br /> needs
              more helping!
            </p>
          </div>
          <div className="team-wrapper row">
            <div className="col-lg-6 sm-padding">
              <div className="team-wrap row">
                <div className="col-md-6">
                  <div className="team-details">
                    <img
                      src="https://html.dynamiclayers.net/dl/charitify/img/team-1.jpg"
                      alt="team"
                    />
                    <div className="hover">
                      <h3>
                        Jonathan Smith <span>Communicator</span>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="team-details">
                    <img
                      src="https://html.dynamiclayers.net/dl/charitify/img/team-2.jpg"
                      alt="team"
                    />
                    <div className="hover">
                      <h3>
                        Angelina Rose <span>Certified Reader</span>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="team-details">
                    <img
                      src="https://html.dynamiclayers.net/dl/charitify/img/team-3.jpg"
                      alt="team"
                    />
                    <div className="hover">
                      <h3>
                        Taylor Swift <span>Event Creator</span>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="team-details">
                    <img
                      src="https://html.dynamiclayers.net/dl/charitify/img/team-4.jpg"
                      alt="team"
                    />
                    <div className="hover">
                      <h3>
                        Michel Brown <span>Internet Specialist</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 sm-padding">
              <div className="team-content">
                <h2>Become a Volunteer?</h2>
                <h3>
                  Join your hand with us for a better life and beautiful future.
                </h3>
                <p>
                  The secret to happiness lies in helping others. Never
                  underestimate the difference YOU can make in the lives of the
                  poor, the abused and the helpless.
                </p>
                <ul className="check-list">
                  <li>
                    <i className="fa fa-check"></i>We are friendly to each
                    other.
                  </li>
                  <li>
                    <i className="fa fa-check"></i>If you join with us,We will
                    give you free training.
                  </li>
                  <li>
                    <i className="fa fa-check"></i>Its an opportunity to help
                    poor children.
                  </li>
                  <li>
                    <i className="fa fa-check"></i>No goal requirements.
                  </li>
                  <li>
                    <i className="fa fa-check"></i>Joining is tottaly free. We
                    dont need any money from you.
                  </li>
                </ul>
                <a href="#" className="default-btn">
                  Join With Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="counter" className="counter-section">
        <div className="container">
          <ul className="row counters">
            <li className="col-md-3 col-sm-6 sm-padding">
              <div className="counter-content">
                <i class="fa-light fa-dollar-sign"></i>
                <h3 className="counter">85389</h3>
                <h4 className="text-white">Money Donated</h4>
              </div>
            </li>
            <li className="col-md-3 col-sm-6 sm-padding">
              <div className="counter-content">
                <i class="fa-solid fa-face-smile"></i>
                <h3 className="counter">10693</h3>
                <h4 className="text-white">Volunteer Around The World</h4>
              </div>
            </li>
            <li className="col-md-3 col-sm-6 sm-padding">
              <div className="counter-content">
                <i class="fa-regular fa-user"></i>
                <h3 className="counter">50177</h3>
                <h4 className="text-white">People Impacted</h4>
              </div>
            </li>
            <li className="col-md-3 col-sm-6 sm-padding">
              <div className="counter-content">
                <i class="fa-regular fa-comments"></i>
                <h3 className="counter">669</h3>
                <h4 className="text-white">Positive Feedbacks</h4>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="events-section bg-grey bd-bottom padding">
        <div className="container">
          <div className="section-heading text-center mb-40">
            <h2>Upcoming Events</h2>
            <span className="heading-border"></span>
            <p>
              Help today because tomorrow you may be the one who <br /> needs
              more helping!
            </p>
          </div>
          <div id="event-carousel" className="events-wrap owl-Carousel">
            <div className="events-item">
              <div className="event-thumb">
                <img
                  src="https://html.dynamiclayers.net/dl/charitify/img/events-1.jpg"
                  alt="events"
                />
              </div>
              <div className="event-details">
                <h3>Let's talk about the poor children.</h3>
                <div className="event-info">
                  <p>
                    <i class="fa-regular fa-calendar"></i>Started On: 12:00 PM.
                  </p>
                  <p>
                    <i class="fa-solid fa-location-dot"></i>Grand Mahal, Dubai
                    2100.
                  </p>
                </div>
                <p>
                  Help today because tomorrow you may be the one who needs more
                  helping!
                </p>
                <a href="#" className="default-btn">
                  Read More
                </a>
              </div>
            </div>
            <div className="events-item">
              <div className="event-thumb">
                <img
                  src="https://html.dynamiclayers.net/dl/charitify/img/events-2.jpg"
                  alt="events"
                />
              </div>
              <div className="event-details">
                <h3>Insure clean water to everyone in Africa.</h3>
                <div className="event-info">
                  <p>
                    <i class="fa-regular fa-calendar"></i>Started On: 12:00 PM.
                  </p>
                  <p>
                    <i class="fa-solid fa-location-dot"></i>Grand Mahal, Dubai
                    2100.
                  </p>
                </div>
                <p>
                  Help today because tomorrow you may be the one who needs more
                  helping!
                </p>
                <a href="#" className="default-btn">
                  Read More
                </a>
              </div>
            </div>
            <div className="events-item">
              <div className="event-thumb">
                <img
                  src="https://html.dynamiclayers.net/dl/charitify/img/events-3.jpg"
                  alt="events"
                />
              </div>
              <div className="event-details">
                <h3>Nepal Earthquake Clean Water Initiative.</h3>
                <div className="event-info">
                  <p>
                    <i class="fa-regular fa-calendar"></i>Started On: 12:00 PM.
                  </p>
                  <p>
                    <i class="fa-solid fa-location-dot"></i>Grand Mahal, Dubai
                    2100.
                  </p>
                </div>
                <p>
                  Help today because tomorrow you may be the one who needs more
                  helping!
                </p>
                <a href="#" className="default-btn">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial-section bd-bottom padding">
        <div className="container">
          <div className="section-heading text-center mb-40">
            <h2>What People Say</h2>
            <span className="heading-border"></span>
            <p>
              Help today because tomorrow you may be the one who <br /> needs
              more helping!
            </p>
          </div>
          <Row>
            <Col lg={4}>
              <div className="testimonial-item">
                <p>
                  The secret to happiness lies in helping others. Never
                  underestimate the difference YOU can make in the lives of the
                  poor, the abused and the helpless.
                </p>
                <div className="testi-footer">
                  <img
                    src="https://html.dynamiclayers.net/dl/charitify/img/team-1.jpg"
                    alt="profile"
                  />
                  <h4>
                    Jonathan Smith <span>Marketer</span>
                  </h4>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="testimonial-item">
                <p>
                  The secret to happiness lies in helping others. Never
                  underestimate the difference YOU can make in the lives of the
                  poor, the abused and the helpless.
                </p>
                <div className="testi-footer">
                  <img
                    src="https://html.dynamiclayers.net/dl/charitify/img/team-1.jpg"
                    alt="profile"
                  />
                  <h4>
                    Jonathan Smith <span>Marketer</span>
                  </h4>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="testimonial-item">
                <p>
                  The secret to happiness lies in helping others. Never
                  underestimate the difference YOU can make in the lives of the
                  poor, the abused and the helpless.
                </p>
                <div className="testi-footer">
                  <img
                    src="https://html.dynamiclayers.net/dl/charitify/img/team-1.jpg"
                    alt="profile"
                  />
                  <h4>
                    Jonathan Smith <span>Marketer</span>
                  </h4>
                </div>
              </div>
            </Col>
          </Row>
          {/* <div id="testimonial-carousel" className="testimonial-carousel owl-carousel">
                  <div className="testimonial-item">
                      <p>The secret to happiness lies in helping others. Never underestimate the difference YOU can make in the lives of the poor, the abused and the helpless.</p>
                      <div className="testi-footer">
                         <img src="img/team-1.jpg" alt="profile"/>
                          <h4>Jonathan Smith <span>Marketer</span></h4>
                      </div>
                  </div>
                  <div className="testimonial-item">
                      <p>The secret to happiness lies in helping others. Never underestimate the difference YOU can make in the lives of the poor, the abused and the helpless.</p>
                      <div className="testi-footer">
                         <img src="img/team-2.jpg" alt="profile"/>
                          <h4>Angelina Rose <span>Designer</span></h4>
                      </div>
                  </div>
                  <div className="testimonial-item">
                      <p>The secret to happiness lies in helping others. Never underestimate the difference YOU can make in the lives of the poor, the abused and the helpless.</p>
                      <div className="testi-footer">
                         <img src="img/team-3.jpg" alt="profile"/>
                          <h4>Taylor Swift <span>Developer</span></h4>
                      </div>
                  </div>
                  <div className="testimonial-item">
                      <p>The secret to happiness lies in helping others. Never underestimate the difference YOU can make in the lives of the poor, the abused and the helpless.</p>
                      <div className="testi-footer">
                         <img src="img/team-4.jpg" alt="profile"/>
                          <h4>Michel Brown <span>Programer</span></h4>
                      </div>
                  </div>
              </div> */}
        </div>
      </section>

      <section className="blog-section bg-grey bd-bottom padding">
        <div className="container">
          <div className="section-heading text-center mb-40">
            <h2>Recent Stories</h2>
            <span className="heading-border"></span>
            <p>
              Help today because tomorrow you may be the one who <br /> needs
              more helping!
            </p>
          </div>
          <div className="row">
            <div className="col-lg-12 xs-padding">
              <div className="blog-items grid-list row">
                <div className="col-md-4 padding-15">
                  <div className="blog-post">
                    <img
                      src="https://html.dynamiclayers.net/dl/charitify/img/home-blog-1.jpg"
                      alt="blog post"
                    />
                    <div className="blog-content">
                      <span className="date">
                        <i className="fa fa-clock-o"></i> January 01.2021
                      </span>
                      <h3>
                        <a href="#">The History of Donation Told</a>
                      </h3>
                      <p>
                        The secret to happiness lies in helping others. Never
                        underestimate the difference YOU can make in the lives
                        of the poor, the abused and the helpless.
                      </p>
                      <a href="#" className="post-meta">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 padding-15">
                  <div className="blog-post">
                    <img
                      src="https://html.dynamiclayers.net/dl/charitify/img/home-blog-2.jpg"
                      alt="blog post"
                    />
                    <div className="blog-content">
                      <span className="date">
                        <i className="fa fa-clock-o"></i> January 01.2021
                      </span>
                      <h3>
                        <a href="#">Help the Comunity</a>
                      </h3>
                      <p>
                        The secret to happiness lies in helping others. Never
                        underestimate the difference YOU can make in the lives
                        of the poor, the abused and the helpless.
                      </p>
                      <a href="#" className="post-meta">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 padding-15">
                  <div className="blog-post">
                    <img
                      src="https://html.dynamiclayers.net/dl/charitify/img/home-blog-3.jpg"
                      alt="blog post"
                    />
                    <div className="blog-content">
                      <span className="date">
                        <i className="fa fa-clock-o"></i> January 01.2021
                      </span>
                      <h3>
                        <a href="#">Charity Ever Rule the World?</a>
                      </h3>
                      <p>
                        The secret to happiness lies in helping others. Never
                        underestimate the difference YOU can make in the lives
                        of the poor, the abused and the helpless.
                      </p>
                      <a href="#" className="post-meta">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="sponsor-section bd-bottom">
          <div className="container">
              <ul id="sponsor-carousel" className="sponsor-items owl-carousel">
                  <li className="sponsor-item">
                      <img src="img/sponsor-1.png" alt="sponsor-image"/>
                  </li>
                  <li className="sponsor-item">
                      <img src="img/sponsor-2.png" alt="sponsor-image"/>
                  </li>
                  <li className="sponsor-item">
                      <img src="img/sponsor-3.png" alt="sponsor-image"/>
                  </li>
                  <li className="sponsor-item">
                      <img src="img/sponsor-4.png" alt="sponsor-image"/>
                  </li>
                  <li className="sponsor-item">
                      <img src="img/sponsor-5.png" alt="sponsor-image"/>
                  </li>
                  <li className="sponsor-item">
                      <img src="img/sponsor-6.png" alt="sponsor-image"/>
                  </li>
                  <li className="sponsor-item">
                      <img src="img/sponsor-7.png" alt="sponsor-image"/>
                  </li>
                  <li className="sponsor-item">
                      <img src="img/sponsor-8.png" alt="sponsor-image"/>
                  </li>
              </ul>
          </div>
      </div> */}
    </>
  );
}

export default LandingPage;
