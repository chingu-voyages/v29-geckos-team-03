import React from 'react'
import { Container, Jumbotron, Card} from 'react-bootstrap'
import '../index.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

const DisplayCard = () => {
  return (
    <Container fluid>
      <Jumbotron>
        <h1>Welcome to Skywatcher</h1>
        <i className="fas fa-sun" style={{fontSize:24}}></i>
                
      </Jumbotron>
      <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Text className="feels"> Feels Like </Card.Text>
            <Card.Title id="degree">15</Card.Title>
            
            <i className="fas fa-sun" style={{fontSize:24}}></i>
                
            <Card.Text>17/13</Card.Text>
            <Card.Text>Precipitation: 100%</Card.Text>
            <Card.Text>Humidity: 67% </Card.Text>
            <Card.Text>Wind: 2m/s</Card.Text>

          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Text className="air-quality"> Air Quality </Card.Text>

          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Text className="traffic"> Traffic </Card.Text>

          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Text className="school-closing">School Closing </Card.Text>

          </Card.Body>
        </Card>
    </Container>
    
  )
}

export default DisplayCard