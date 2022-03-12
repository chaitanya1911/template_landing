import React, { useEffect, useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router";
import Page_404_svg from "../images/Page_404.svg";
import { makeStyles } from "@mui/styles";
import { ThemeContext } from "../ThemeContext";

const useStyles = makeStyles({
  EPsvg: {
    marginTop: "20px",
    width: "100%",
    height: "400px",
  },

  EPheader: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "36px",
    lineHeight: "54px",
    color: "#081466",
  },
  EPcontent: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "norma;",
    fontSize: "20px",
    lineHeight: "30px",
    color: "#c4c4c4",
  },
  EPbut: {
    width: "90px",
    height: "45px",
    background: "#293e6f",
    borderRadius: "14px",
    color: "white",
  },
});
function Page_404() {
  const classes = useStyles();
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const navigate = useNavigate();
  useEffect(() => {}, []);
  return (
    <div style={{ padding: "200px 0" }}>
      <Row className="EPheader">
        <Col>
          {" "}
          <h3 style={{ textAlign: "center" }}>Oops I'm Feeling Lost</h3>
        </Col>
      </Row>
      <Row className={classes.EPcontent} style={{ margin: "10px 0px" }}>
        <Col>
          <h6 style={{ textAlign: "center" }}>
            Why don't you try one of this page instead?
          </h6>
        </Col>
      </Row>
      <Row>
        <Col style={{ textAlign: "center" }}>
          <a href="/" className="default-btn">
            <button style={{color:'white'}}>Home</button>
          </a>
        </Col>
      </Row>
    </div>
  );
}

export default Page_404;
