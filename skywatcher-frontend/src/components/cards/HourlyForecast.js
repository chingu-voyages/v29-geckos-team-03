import React from "react";
import { Row } from "react-bootstrap";
import { useFetchWeatherHourly } from "../../services/ApiHelpers";
import { ToTime } from "../../services/DateHelpers";
import { StyledCardBody } from "../CustomStyling";

const HourlyForecast = ({ lat, lon, unit }) => {
  const { data, error, loading } = useFetchWeatherHourly(lat, lon, unit);

  if (loading) return <p>Still Loading!</p>;
  if (error) throw error;
  console.log(data);

  return (
    <StyledCardBody id="hourly-forcast" className="mt-3 mb-3">
      {data.hourly.map((item, idx) => (
        <Row key={`hourly-${idx}`} className="mr-0 ml-0">
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
    </StyledCardBody>
  );
};

export default HourlyForecast;
