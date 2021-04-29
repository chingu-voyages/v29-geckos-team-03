import React from 'react'
import { Container, Jumbotron, Card, Row, Col} from 'react-bootstrap'
import '../index.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

const DisplayCard = () => {
  return (
    <Container fluid>
      <Jumbotron>
        <h1>Welcome to Skywatcher</h1>
        <i className="fas fa-sun" style={{fontSize:24}}></i>
                
      </Jumbotron>
      <div class="weather-display-container">
            <div className="current-weather ">
                <Card className="current-forcast" style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Text className="feels"> Feels Like </Card.Text>
                      <Card.Title id="degree">15</Card.Title>
                      <div className="weather-icon"> 
                          <i className="fas fa-sun" style={{fontSize:24}}></i>
                          <div className="weather-info"> 
                            <Card.Text>17/13</Card.Text>
                            <Card.Text>Precipitation: 100%</Card.Text>
                            <Card.Text>Humidity: 67% </Card.Text>
                            <Card.Text>Wind: 2m/s</Card.Text>
                          </div>
                      </div>
                    </Card.Body>
                  </Card>
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
                    <Col><i className="fas fa-sun" style={{fontSize:24}}></i></Col>
                    <Col><i className="fas fa-sun" style={{fontSize:24}}></i></Col>
                    <Col><i className="fas fa-sun" style={{fontSize:24}}></i></Col>
                    <Col><i className="fas fa-sun" style={{fontSize:24}}></i></Col>
                    <Col><i className="fas fa-sun" style={{fontSize:24}}></i></Col>
                    <Col><i className="fas fa-sun" style={{fontSize:24}}></i></Col>
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