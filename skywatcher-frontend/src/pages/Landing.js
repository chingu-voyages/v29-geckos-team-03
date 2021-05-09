import React from 'react'
import { Container} from 'react-bootstrap'
import DisplayCard from './DisplayCard.js'
import CurrentWeather from './CurrentWeather.js'
import '../index.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

const Landing = () => {
  return (
    <Container fluid>
      
      <DisplayCard />
      <CurrentWeather />
     
    </Container>
    
  )
}

export default Landing
