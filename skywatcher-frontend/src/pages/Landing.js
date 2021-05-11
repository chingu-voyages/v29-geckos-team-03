import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "../index.css";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import { useFetchWeatherForecast } from "../services/ApiHelpers";
import CityTimeHeader from "../components/city-time-header/CityTimeHeader";

const Landing = () => {
  const [city, setCity] = useState("New York");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  const {
    data: forecast_data,
    error: forecast_error,
    loading: forecast_loading,
  } = useFetchWeatherForecast(city);

  if (forecast_loading) return <p>Still Loading!</p>;
  if (forecast_error) throw forecast_error;
  return (
    <Container fluid>
      <CityTimeHeader city={forecast_data.city} list={forecast_data.list} />
    </Container>
  );
};

export default Landing;
