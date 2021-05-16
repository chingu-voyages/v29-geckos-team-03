import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { StyledCard } from "../CustomStyling";
import { ToDayShort, ToDate } from "../../services/DateHelpers.js";

// Use distinctApiDays to get list of days e.g. distinctApiDays(data.list) where data.list is the array returned by the API
class WeeklyForecast extends React.Component {
  state = {
    loading: true,
    day: null,
    weatherIcon: null,
    temperature: null,
  };

  async componentDidMount() {
    const api_url = `https://api.openweathermap.org/data/2.5/onecall?lat=43&lon=-75&exclude=current,minutely,hourly,alerts?&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER_API}`;

    const response = await fetch(api_url);
    const data = await response.json();

    this.setState({ day: data.daily, loading: false });
    this.setState({
      weatherIcon: data.daily.weather,
      loading: false,
    });
  }

  render() {
    if (this.state.loading) {
      return <div>...Loading</div>;
    }
    if (this.state.main) {
      return <div>Sorry Didn't find Weather </div>;
    }
    return (
      <StyledCard>
        <Card.Body>
          <Row xs={2} md={4} lg={6}>
            <Col>{ToDayShort(this.state.day[1].dt)}</Col>
            <Col>{ToDayShort(this.state.day[2].dt)}</Col>
            <Col>{ToDayShort(this.state.day[3].dt)}</Col>
            <Col>{ToDayShort(this.state.day[4].dt)}</Col>
            <Col>{ToDayShort(this.state.day[5].dt)}</Col>
            <Col>{ToDayShort(this.state.day[6].dt)}</Col>
          </Row>

          <Row xs={2} md={4} lg={6}>
            <Col>{ToDate(this.state.day[1].dt)}</Col>
            <Col>{ToDate(this.state.day[2].dt)}</Col>
            <Col>{ToDate(this.state.day[3].dt)}</Col>
            <Col>{ToDate(this.state.day[4].dt)}</Col>
            <Col>{ToDate(this.state.day[5].dt)}</Col>
            <Col>{ToDate(this.state.day[6].dt)}</Col>
          </Row>

          <Row xs={2} md={4} lg={6}>
            <Col>
              <img
                src={`http://openweathermap.org/img/w/${this.state.day[1].weather[0].icon}.png`}
                alt=""
              />
            </Col>
            <Col>
              <img
                src={`http://openweathermap.org/img/w/${this.state.day[2].weather[0].icon}.png`}
                alt=""
              />
            </Col>
            <Col>
              <img
                src={`http://openweathermap.org/img/w/${this.state.day[3].weather[0].icon}.png`}
                alt=""
              />
            </Col>
            <Col>
              <img
                src={`http://openweathermap.org/img/w/${this.state.day[4].weather[0].icon}.png`}
                alt=""
              />
            </Col>
            <Col>
              <img
                src={`http://openweathermap.org/img/w/${this.state.day[5].weather[0].icon}.png`}
                alt=""
              />
            </Col>
            <Col>
              <img
                src={`http://openweathermap.org/img/w/${this.state.day[6].weather[0].icon}.png`}
                alt=""
              />
            </Col>
          </Row>

          <Row xs={2} md={4} lg={6}>
            <Col>
              {Number(this.state.day[1].temp.min).toFixed(0)} |{" "}
              {Number(this.state.day[1].temp.max).toFixed(0)}
            </Col>
            <Col>
              {Number(this.state.day[2].temp.min).toFixed(0)} |{" "}
              {Number(this.state.day[2].temp.max).toFixed(0)}
            </Col>
            <Col>
              {Number(this.state.day[3].temp.min).toFixed(0)} |{" "}
              {Number(this.state.day[3].temp.max).toFixed(0)}
            </Col>
            <Col>
              {Number(this.state.day[4].temp.min).toFixed(0)} |{" "}
              {Number(this.state.day[4].temp.max).toFixed(0)}
            </Col>
            <Col>
              {Number(this.state.day[5].temp.min).toFixed(0)} |{" "}
              {Number(this.state.day[5].temp.max).toFixed(0)}
            </Col>
            <Col>
              {Number(this.state.day[6].temp.min).toFixed(0)} |{" "}
              {Number(this.state.day[6].temp.max).toFixed(0)}
            </Col>
          </Row>
        </Card.Body>
      </StyledCard>
    );
  }
}

export default WeeklyForecast;
