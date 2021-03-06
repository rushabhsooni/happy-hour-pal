import React from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
// import logo from "./quaillogo.png";
import logo from "./Webp.net-gifmaker.gif";
import "./Loading.css";



// Shows when app is first opened and loading
const Loading = () => (

  setTimeout(function() {
    const origin = window.location.origin;
    window.location.replace(origin + "/tabs")
  }, 5000),

  <div className="loading-page">
    <Container>
      <Row>
        <Col size="md-12">
          {/* Alt way to load image - both ok */}
          {/* <img className="quail-logo" src="/assets/images/quaillogo.png" alt="quail-logo" /> */}

          <img className="quail-logo" src={logo} alt="quail-logo" />

          <h3 className="welcome-message">Hello, welcome to</h3>
          <h3 className="welcome-message-name">HappyHourPal!</h3>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <p className="slogan">Find the best happy hour deals nearby.</p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Loading;
