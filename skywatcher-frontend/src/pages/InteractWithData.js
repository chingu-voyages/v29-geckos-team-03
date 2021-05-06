import React, { useState } from 'react'
import { Button, Container, Row, Col, Card } from 'react-bootstrap'
import ReactJson from 'react-json-view'
import useFetch from "../services/UseFetch";
import { HeaderContainer, HeaderText } from '../components/custom-styles/Header.style'

const apis = {
  location: 'http://localhost:4000/location',
  weather: 'http://localhost:4000/weather',
  openweather: `https://api.openweathermap.org/data/2.5/forecast?q=Denver&appid=${process.env.REACT_APP_OPEN_WEATHER_API}`
}



const InteractWithData = () => {
  const [apiUrl, setApiUrl] = useState(apis.location)
  const { data, error, loading } = useFetch(apiUrl)
  console.log(apis.openweather)

  if (error) throw error
  if (loading) return <p>Loading API Data!</p>
  return (
    <Container>
      <HeaderContainer>
        <HeaderText>Select API Data to View</HeaderText>
      </HeaderContainer>
      <hr />
      <Row>
        <Col>
          <Button variant="secondary" block onClick={e => setApiUrl(apis.location)}>Location</Button>
        </Col>
        <Col>
          <Button variant="secondary" block onClick={e => setApiUrl(apis.openweather)}>Weather</Button>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <Card>
            <Card.Header as="h4">JSON Data</Card.Header>
            <Card.Body>
              <ReactJson src={data} theme="monokai" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default InteractWithData
