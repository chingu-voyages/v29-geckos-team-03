import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../index.css";
import CityTimeHeader from "../components/city-time-header/CityTimeHeader";
import CurrentWeather from "../components/current-weather/CurrentWeather";

const Landing = () => {
  const [city, setCity] = useState("New York");

  return (
    <Container fluid>
      <CityTimeHeader city={city} setCity={setCity} />
      <Row>
        <Col md={3} xs={12}>
          <CurrentWeather city={city} />
        </Col>
        <Col md={9} xs={12}></Col>
      </Row>
    </Container>
  );
};

export default Landing;
