import React from 'react'
import { Card} from 'react-bootstrap'
import '../index.css';

class CurrentWeather extends React.Component {
  state = {
      loading:true,
      feelsLike:null,
      wind:null,
      weatherIcon: null,
  }

  async componentDidMount(){
    const api_url = `https://api.openweathermap.org/data/2.5/weather?q=new%20york&&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER_API}`
    const response = await fetch(api_url);
    const data = await response.json()
    this.setState({ feelsLike: data.main, loading: false})
    this.setState({ wind: data.wind, loading: false})
    this.setState({ weatherIcon: data.weather[0].icon, loading: false})
    
    console.log(data)
  }

  render(){

    if(this.state.loading){
        return <div>...Loading</div>
    }
    if(this.state.main){
        return <div>Sorry Didn't find Weather </div>
    }
      return(
         
                <Card className="current-forcast" style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Text className="feels"> Feels Like </Card.Text>
                      <Card.Title id="degree">{this.state.feelsLike.feels_like}</Card.Title>
                      <div className="weather-icon"> 
                          <img src={`http://openweathermap.org/img/w/${this.state.weatherIcon}.png`}/>

                          <div className="weather-info"> 
                            <Card.Text>{this.state.feelsLike.temp_max}/{this.state.feelsLike.temp_min}</Card.Text>
                            <Card.Text>Precipitation: 100%</Card.Text>
                            <Card.Text>Humidity: {this.state.feelsLike.humidity} </Card.Text>
                            <Card.Text>Wind: 2m/s {this.state.feelsLike.wind}</Card.Text>
                          </div>
                      </div>
                    </Card.Body>
                  </Card>
          


            
        
          
      )
  }
}

export default CurrentWeather