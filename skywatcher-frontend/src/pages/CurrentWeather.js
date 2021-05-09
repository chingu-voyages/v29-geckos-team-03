import React from 'react'
import { Container, Jumbotron, Card, Row, Col} from 'react-bootstrap'
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'


class CurrentWeather extends React.Component {
  state = {
      loading:true,
      feelsLike:null,
      wind:null,
      weatherIcon: null,
  }

  async componentDidMount(){
    const api_url = `https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=0aeeb80f1822726609f7a5570cc0992c`
    const response = await fetch(api_url);
    const data = await response.json()
    this.setState({ feelsLike: data.main, loading: false})
    this.setState({ wind: data.wind, loading: false})
    this.setState({ weatherIcon: data.weather[0].main, loading: false})
    
    console.log(data.weather[0].icon)
  }

  render(){

    if(this.state.loading){
        return <div>...Loading</div>
    }
    if(this.state.main){
        return <div>Sorry Didn't find Weather </div>
    }
      return(
         
            <div className="current-weather ">
                <Card className="current-forcast" style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Text className="feels"> Feels Like </Card.Text>
                      <Card.Title id="degree">{this.state.feelsLike.feels_like}</Card.Title>
                      <div className="weather-icon"> 
                          <Card.Text>{this.state.weatherIcon}</Card.Text>
                          {/* <FontAwesomeIcon icon={"sun"} style={{fontSize:80}}/> */}
                          <div className="weather-info"> 
                            <Card.Text>{this.state.feelsLike.temp_max}/{this.state.feelsLike.temp_min}</Card.Text>
                            <Card.Text>Precipitation: 100%</Card.Text>
                            <Card.Text>Humidity: {this.state.feelsLike.humidity} </Card.Text>
                            <Card.Text>Wind: 2m/s {this.state.feelsLike.wind}</Card.Text>
                          </div>
                      </div>
                    </Card.Body>
                  </Card>
            </div>


            
        
          
      )
  }
}

export default CurrentWeather