import React from 'react'
import { Container } from 'react-bootstrap'



const api_url = `api.openweathermap.org/data/2.5/weather?q={Toronto}&appid={API key}`

class CurrentWeather extends React.Component {
  state = {
      loading:true
  }

  async componentDidMount(){
    const api_url = `https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=0aeeb80f1822726609f7a5570cc0992c`

  }
  
}

export default CurrentWeather