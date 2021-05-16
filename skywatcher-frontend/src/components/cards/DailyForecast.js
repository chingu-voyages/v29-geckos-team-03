import React from "react";
import { Col, Row } from "react-bootstrap";
import { useFetchWeatherDaily } from "../../services/ApiHelpers";
import { ToDayShort } from "../../services/DateHelpers";
import { StyledCard } from "../CustomStyling";

const DailyForecast = ({ lat, lon, unit }) => {
  const { data, error, loading } = useFetchWeatherDaily(lat, lon, unit);

  if (loading) return <p>Still Loading!</p>;
  if (error) throw error;

  return (
    <StyledCard>
      <Row>
        {data.daily.map((item, idx) => (
          <Col key={`daily-${idx}`}>
            <p>{ToDayShort(item.dt)}</p>
            <p>Min: {item.temp.min}</p>
            <p>Max: {item.temp.max}</p>
          </Col>
        ))}
      </Row>
    </StyledCard>
  );
};

export default DailyForecast;
