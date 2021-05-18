import React from "react";
import { Row } from "react-bootstrap";
import { useFetchWeatherHourly } from "../../services/ApiHelpers";
import { ToDayShort, ToTime } from "../../services/DateHelpers";
import { StyledCard } from "../CustomStyling";

const HourlyForecast = ({ lat, lon, unit }) => {
  const { data, error, loading } = useFetchWeatherHourly(lat, lon, unit);

  if (loading) return <p>Still Loading!</p>;
  if (error) throw error;

  return (
    <StyledCard height="65vh" padding="15%">
      {data.hourly.map((item, idx) => (
        <Row key={`hourly-${idx}`}>
          {ToDayShort(item.dt)}, {ToTime(item.dt)}
          <hr />
          <p>
            Feels Like: {item.feels_like} | Temperature: {item.temp} | Humidity:{" "}
            {item.humidity} | Pressure: {item.pressure} | Visibility:{" "}
            {item.visibility}
          </p>
        </Row>
      ))}
    </StyledCard>
  );
};

export default HourlyForecast;
