import React, { useState } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import ReactJson from "react-json-view";
import useFetch from "../../services/UseFetch";
import { HeaderContainer, HeaderText } from "./InteractWithData.style";

const InteractWithData = () => {
  const city = "New York";
  const lat = 40.7143;
  const lon = -74.006;
  const unit = "metric";
  const dateTime = parseInt(Date.now() / 1000);
  const [apiUrl, setApiUrl] = useState(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPEN_WEATHER_API}`
  );
  const [apiName, setApiName] = useState("");
  const { data, error, loading } = useFetch(apiUrl);

  const apis = {
    currentWeather: {
      name: "Current Weather",
      url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&unit=${unit}&appid=${process.env.REACT_APP_OPEN_WEATHER_API}`,
    },
    hourlyForecast: {
      name: "Hourly Forecast",
      url: `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,daily,alerts&unit=${unit}&appid=${process.env.REACT_APP_OPEN_WEATHER_API}`,
    },
    dailyForecast: {
      name: "Daily Forecast",
      url: `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&unit=${unit}&appid=${process.env.REACT_APP_OPEN_WEATHER_API}`,
    },
    weatherAlerts: {
      name: "Weather Alerts",
      url: `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,daily&unit=${unit}&appid=${process.env.REACT_APP_OPEN_WEATHER_API}`,
    },
    historicalWeather: {
      name: "Historical Weather",
      url: `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${dateTime}&unit=${unit}&appid=${process.env.REACT_APP_OPEN_WEATHER_API}`,
    },
    airPollution: {
      name: "Air Pollution",
      url: `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&unit=${unit}&appid=${process.env.REACT_APP_OPEN_WEATHER_API}`,
    },
    geocodingAPI: {
      name: "Geocoding API",
      url: `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${process.env.REACT_APP_OPEN_WEATHER_API}`,
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleApiSelect = (e) => {
    setApiName(e.target.value);
    setApiUrl(e.target.value);
  };

  if (error) throw error;
  if (loading) return <p>Loading API Data!</p>;
  console.log(apis);
  return (
    <Container>
      <HeaderContainer>
        <HeaderText>Interact With APIs</HeaderText>
      </HeaderContainer>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="select-api" as={Row}>
          <Col md={3}>
            <Form.Label>Select API</Form.Label>
          </Col>
          <Col>
            <Form.Control
              as="select"
              custom
              value={apiName}
              onChange={handleApiSelect}
            >
              {Object.entries(apis).map((api, idx) => (
                <option key={`api-list-${idx}`} value={api[1].url}>
                  {api[1].name}
                </option>
              ))}
            </Form.Control>
            <Form.Text>
              For Demonstration purposes, the selected city is New York
            </Form.Text>
          </Col>
        </Form.Group>
      </Form>
      <Row className="mt-3">
        <Col>
          <Card>
            <Card.Header as="h4">JSON Data</Card.Header>
            <Card.Body>
              <ReactJson
                src={data}
                theme="monokai"
                style={{ maxHeight: "60vh", overflow: "auto" }}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default InteractWithData;
