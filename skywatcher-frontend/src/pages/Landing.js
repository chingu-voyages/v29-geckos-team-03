import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "../index.css";
import { LandingContainer } from "./Landing.style";
import CityTimeHeader from "../components/layout/CityTimeHeader";
import CurrentWeather from "../components/cards/CurrentWeather";
import AirPollution from "../components/cards/AirPollution";
import WeatherMap from "../components/cards/WeatherMap";
import WeatherAlerts from "../components/cards/WeatherAlerts";
import WeeklyForecast from "../components/cards/WeeklyForecast";
import TBD from "../components/cards/TBD";

const Landing = () => {
  const [city, setCity] = useState("New York");
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  return (
    <LandingContainer>
      <CityTimeHeader city={city} setCity={setCity} />
      <Row>
        <Col lg={3} md={6} xs={12}>
          <CurrentWeather city={city} />
        </Col>
        <Col lg={9} md={6} xs={12}>
          <Row>
            <Col lg={4} xs={12}>
              <AirPollution lat={lat} lon={lon} />
            </Col>
            <Col lg={4} xs={12}>
              <WeatherAlerts />
            </Col>
            <Col lg={4} xs={12}>
              <WeatherMap />
            </Col>
          </Row>
          <Row>
            <Col lg={8} xs={12}>
              <WeeklyForecast city={city} />
            </Col>
            <Col lg={4} xs={12}>
              <TBD />
            </Col>
          </Row>
        </Col>
      </Row>
    </LandingContainer>
  );
};

export default Landing;
