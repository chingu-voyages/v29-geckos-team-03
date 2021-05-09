import React from 'react'
import { Container, Jumbotron, Card, Row, Col} from 'react-bootstrap'
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import CurrentWeather from './CurrentWeather.js'

library.add(faSun)

const DisplayCard = () => {
  return (
    <Container fluid>
      <Jumbotron>
        <h1>Welcome to Skywatcher</h1>
       
                
      </Jumbotron>
      <div class="weather-display-container">
            <CurrentWeather />

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
                <Card.Body>
                  <Row xs={2} md={4} lg={6}>
                    <Col>Day</Col>
                    <Col>Day</Col>
                    <Col>Day</Col>
                    <Col>Day</Col>
                    <Col>Day</Col>
                    <Col>Day</Col>
                  </Row>

                  <Row xs={2} md={4} lg={6}>
                    <Col><FontAwesomeIcon icon={"sun"} style={{fontSize:24}}/></Col>
                    <Col><FontAwesomeIcon icon={"sun"} style={{fontSize:24}}/></Col>
                    <Col><FontAwesomeIcon icon={"sun"} style={{fontSize:24}}/></Col>
                    <Col><FontAwesomeIcon icon={"sun"} style={{fontSize:24}}/></Col>
                    <Col><FontAwesomeIcon icon={"sun"} style={{fontSize:24}}/></Col>
                    <Col><FontAwesomeIcon icon={"sun"} style={{fontSize:24}}/></Col>
                  </Row>

                  <Row xs={2} md={4} lg={6}>
                    <Col>13</Col>
                    <Col>15</Col>
                    <Col>17</Col>
                    <Col>14</Col>
                    <Col>14</Col>
                    <Col>16</Col>
                  </Row>
              
                </Card.Body>
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