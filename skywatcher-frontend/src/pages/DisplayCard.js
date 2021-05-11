import React from 'react'
import { Container, Jumbotron, Card, Row, Col} from 'react-bootstrap'
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import WeeklyForcast from './WeeklyForcast';
import CurrentWeather from './CurrentWeather';

library.add(faSun)

const DisplayCard = () => {
  return (
    <Container fluid>
      <Jumbotron>
        <h1>Welcome to Skywatcher</h1>
       
                
      </Jumbotron>
      <div class="weather-display-container">
        <div className="current-weather ">
            <CurrentWeather />
        </div>

        <div className="weather-detail">
              <Card className="air-quality" style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Text> Air Quality </Card.Text>

                </Card.Body>
              </Card>

              <Card className="traffic" style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Text> Traffic </Card.Text>

                </Card.Body>
              </Card>

              <Card className="school-closing" style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Text>School Closing </Card.Text>

                </Card.Body>
              </Card>

              
              
              <Card className="by-day-forcast" style={{ width: '25rem' }}>
                <WeeklyForcast />
            </Card>

              <Card className="other" style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Text className="school-closing">Other</Card.Text>

                </Card.Body>
              </Card>
              
          </div>    
    </div>
    </Container>
    
  )
}

export default DisplayCard