import React from "react";
import { Container } from "react-bootstrap";
import LandingHeader from "../../components/city-time-header/CityTimeHeader";
import useFetch from "../../services/UseFetch";

const api_url = `https://api.openweathermap.org/data/2.5/forecast?q=New%20York&appid=${process.env.REACT_APP_OPEN_WEATHER_API}`;

const SchoolClosing = () => {
  const { data, error, loading } = useFetch(api_url);

  if (loading) return <p>Still Loading!</p>;
  if (error) throw error;

  return (
    <Container>
      <LandingHeader city={data.city} list={data.list} />
    </Container>
  );
};

export default SchoolClosing;
