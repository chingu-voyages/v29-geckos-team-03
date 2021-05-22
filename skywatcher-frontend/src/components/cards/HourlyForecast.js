import React from "react";
import { Card, Row } from "react-bootstrap";
import { useFetchWeatherHourly } from "../../services/ApiHelpers";
import { ToDayShort, ToTime } from "../../services/DateHelpers";

const HourlyForecast = ({ lat, lon, unit }) => {
  const { data, error, loading } = useFetchWeatherHourly(lat, lon, unit);

  if (loading) return <p>Still Loading!</p>;
  if (error) throw error;

  return (
    <Card.Body>
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
    </Card.Body>
  );
};

export default HourlyForecast;
