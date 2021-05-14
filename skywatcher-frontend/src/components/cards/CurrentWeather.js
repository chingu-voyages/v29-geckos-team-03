import React from "react";
import { Card } from "react-bootstrap";

import { StyledCard, CWIcon, CWInfo, CardTitle } from "../CustomStyling";

class CurrentWeather extends React.Component {
  state = {
    loading: true,
    feelsLike: null,
    wind: null,
    weatherIcon: null,
  };

  async componentDidMount() {
    const city = this.props.city;
    const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER_API}`;
    const response = await fetch(api_url);
    const data = await response.json();
    this.setState({
      feelsLike: data.main,
      loading: false,
    });
    this.setState({ windSpeed: data.wind.speed, loading: false });
    this.setState({ weatherIcon: data.weather[0].icon, loading: false });

    console.log(data.wind.speed);
  }

  render() {
    if (this.state.loading) {
      return <div>...Loading</div>;
    }
    if (this.state.main) {
      return <div>Sorry Didn't find Weather </div>;
    }
    return (
      <StyledCard min_height="65vh">
        <Card.Body>
          <CWIcon
            src={`http://openweathermap.org/img/w/${this.state.weatherIcon}.png`}
            alt="Weather Icon"
          />
          <CardTitle> Feels Like </CardTitle>
          <Card.Title id="degree">{this.state.feelsLike.feels_like}</Card.Title>
          <CWInfo>
            <Card.Text>
              {this.state.feelsLike.temp_max}/{this.state.feelsLike.temp_min}
            </Card.Text>
            <Card.Text>Precipitation: 100%</Card.Text>
            <Card.Text>Humidity: {this.state.feelsLike.humidity} </Card.Text>
            <Card.Text>Wind:{this.state.windSpeed}</Card.Text>
          </CWInfo>
        </Card.Body>
      </StyledCard>
    );
  }
}

export default CurrentWeather;
