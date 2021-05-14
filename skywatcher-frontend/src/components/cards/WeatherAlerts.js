import React from "react";
import { useFetchWeatherAlerts } from "../../services/ApiHelpers";
import { CardTitle, StyledCard } from "../CustomStyling";

const WeatherAlerts = ({ lat, lon }) => {
  const { data, error, loading } = useFetchWeatherAlerts({ lat, lon });

  const alerts = [
    {
      lat: "40.7143",
      lon: "-74.006",
      timezone: "America/New_York",
      timezone_offset: "-14400",
    },
  ];

  if (loading) return <p>Still Loading!</p>;
  if (error) throw error;
  return (
    <StyledCard>
      <CardTitle>Weather Alerts</CardTitle>
      <>
        <p>Timezone: {alerts[0].timezone}</p>
        <p>Latuide: {alerts[0].lat}</p>
        <p>Longitude: {alerts[0].lon}</p>
        <p>Timezone offset: {alerts[0].timezone_offset}</p>
      </>
    </StyledCard>
  );
};

export default WeatherAlerts;
