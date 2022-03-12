import React, { useContext } from "react";
import { Col, Navbar, Row } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./screens/LandingPage";
import { ThemeContext } from "./ThemeContext";
import { makeStyles } from "@mui/styles";
import ContactUs from "./screens/ContactUs";
import Signup from "./screens/Signup";
import Page_404 from "./components/Page_404";
import Spinner from "./components/Spinner";
import ChatBot from 'react-simple-chatbot';

const useStyles = makeStyles({
  bodyWrap: {
    background: "#1D2026",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  bodyWrapDark: {
    background: "grey",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
});

function App() {
  const classes = useStyles();
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <>
      <Spinner></Spinner>
      <Header></Header>
      <Router>
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/contact" exact element={<ContactUs />} />
          <Route
            path="*"
            element={
              <Row style={{ margin: "20px 0 0 0" }}>
                <Col style={{ padding: "10px 90px" }}>
                  <Page_404 />
                </Col>
              </Row>
            }
          />
        </Routes>
      </Router>
      <Footer></Footer>

      <ChatBot
  headerTitle="Speech Synthesis"
  speechSynthesis={{ enable: true, lang: 'en' }}
  recognitionEnable={true}
  steps={[
    {
      id: '1',
      message: 'What is your name?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Hi {previousValue}, nice to meet you!',
      end: true,
    },
  ]}
/>
      <a data-scroll href="#header" id="scroll-to-top">
        <i class="fa-solid fa-arrow-up"></i>
      </a>

      <script src="js/vendor/jquery-1.12.4.min.js"></script>
      <script src="js/vendor/bootstrap.min.js"></script>
      <script src="js/vendor/tether.min.js"></script>
      <script src="js/vendor/imagesloaded.pkgd.min.js"></script>
      <script src="js/vendor/owl.carousel.min.js"></script>
      <script src="js/vendor/jquery.isotope.v3.0.2.js"></script>
      <script src="js/vendor/smooth-scroll.min.js"></script>
      <script src="js/vendor/venobox.min.js"></script>
      <script src="js/vendor/jquery.ajaxchimp.min.js"></script>
      <script src="js/vendor/jquery.counterup.min.js"></script>
      <script src="js/vendor/jquery.waypoints.v2.0.3.min.js"></script>
      <script src="js/vendor/jquery.slicknav.min.js"></script>
      <script src="js/vendor/jquery.nivo.slider.pack.js"></script>
      <script src="js/vendor/letteranimation.min.js"></script>
      <script src="js/vendor/wow.min.js"></script>
      <script src="js/contact.js"></script>
      <script src="js/main.js"></script>
    </>
  );
}

export default App;
