import React from "react";
import { useFetchWeatherAlerts } from "../../services/ApiHelpers";
import { CardTitle, StyledCard } from "../CustomStyling";

const WeatherAlerts = ({ lat, lon }) => {
  const { data, error, loading } = useFetchWeatherAlerts({ lat, lon });

  if (loading) return <p>Still Loading!</p>;
  if (error) throw error;
  return (
    <StyledCard>
      <CardTitle>Weather Alerts</CardTitle>
      <p>{JSON.stringify(data)}</p>
    </StyledCard>
  );
};

export default WeatherAlerts;
