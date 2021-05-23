import React from "react";
import { Card, Row } from "react-bootstrap";
import { useFetchWeatherHourly } from "../../services/ApiHelpers";
import { ToDayShort, ToTime } from "../../services/DateHelpers";

const HourlyForecast = ({ lat, lon, unit }) => {
  const { data, error, loading } = useFetchWeatherHourly(lat, lon, unit);

  if (loading) return <p>Still Loading!</p>;
  if (error) throw error;
  console.log(data);

  return (
    <Card.Body id="hourly-forcast">
      {data.hourly.map((item, idx) => (
        <Row key={`hourly-${idx}`}>
          <p id="hourly-temp">
            {ToTime(item.dt)}:
            <img
              src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
              alt=""
            />
            {Number(item.temp).toFixed(0)}&deg;C
          </p>
        </Row>
      ))}
    </Card.Body>
  );
};

export default HourlyForecast;
