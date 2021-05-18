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
import HourlyForecast from "../components/cards/HourlyForecast";
import HistoricalWeather from "../components/cards/HistoricalWeather";

const Landing = () => {
  const [city, setCity] = useState("New York");
  const [lat, setLat] = useState(40.7143);
  const [lon, setLon] = useState(-74.006);
  const [unit, setUnit] = useState("metric");
  const [toggleCurrentHourly, setToggleCurrentHourly] = useState(false);

  let unitDeg = unit === "metric" ? "C" : "F";

  const handleCurrentHourlyDisplay = () => {
    let newDisplay = !toggleCurrentHourly;
    setToggleCurrentHourly(newDisplay);
  };

  const handleChangeCity = (newCity) => {
    setCity(newCity);
  };

  const handleChangeCoordinates = (newLat, newLon) => {
    setLat(newLat);
    setLon(newLon);
  };

  const handleChangeUnit = (newUnit) => {
    setUnit(newUnit);
  };

  return (
    <LandingContainer>
      <CityTimeHeader
        city={city}
        lat={lat}
        lon={lon}
        unit={unit}
        setCity={setCity}
        handleChangeCoordinates={handleChangeCoordinates}
        handleChangeCity={handleChangeCity}
      />
      <Row>
        <Col lg={3} md={6} xs={12}>
          {toggleCurrentHourly ? (
            <HourlyForecast
              lat={lat}
              lon={lon}
              unit={unit}
              handleCurrentHourlyDisplay={handleCurrentHourlyDisplay}
            />
          ) : (
            <CurrentWeather
              city={city}
              unit={unit}
              unitDeg={unitDeg}
              handleChangeUnit={handleChangeUnit}
            />
          )}
        </Col>
        <Col lg={9} md={6} xs={12}>
          <Row>
            <Col lg={4} xs={12}>
              <AirPollution lat={lat} lon={lon} />
            </Col>
            <Col lg={4} xs={12}>
              <WeatherAlerts lat={lat} lon={lon} />
            </Col>
            <Col lg={4} xs={12}>
              <WeatherMap lat={lat} lon={lon} city={city} />
            </Col>
          </Row>
          <Row>
            <Col lg={8} xs={12}>
              <WeeklyForecast city={city} lat={lat} lon={lon} />
            </Col>
            <Col lg={4} xs={12}>
              <HistoricalWeather lat={lat} lon={lon} unit={unit} />
            </Col>
          </Row>
        </Col>
      </Row>
    </LandingContainer>
  );
};

export default Landing;
