import React, { useState } from 'react'
import { Container, Row, Col, Card, Form } from 'react-bootstrap'
import ReactJson from 'react-json-view'
import useFetch from "../../services/UseFetch";
import { HeaderContainer, HeaderText } from './InteractWithData.style'

const apis = {
  // location: { name: 'location', url: 'http://localhost:4000/location' },
  // weather: { name: 'weather', url: 'http://localhost:4000/weather' },
  openweather: { name: 'openweather', url: `https://api.openweathermap.org/data/2.5/forecast?q=New%20York&appid=${process.env.REACT_APP_OPEN_WEATHER_API}` }
}

const InteractWithData = () => {
  const [apiUrl, setApiUrl] = useState(apis.openweather.url)
  const [apiName, setApiName] = useState("")
  const { data, error, loading } = useFetch(apiUrl)

  const handleSubmit = e => {
    e.preventDefault()
  }

  const handleApiSelect = e => {
    setApiName(e.target.value)
    setApiUrl(e.target.value)
  }

  if (error) throw error
  if (loading) return <p>Loading API Data!</p>
  console.log(apis)
  return (
    <Container>
      <HeaderContainer>
        <HeaderText>Interact With APIs</HeaderText>
      </HeaderContainer>
      <hr />
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="select-api" as={Row}>
          <Col md={3}>
            <Form.Label>Select API</Form.Label>
          </Col>
          <Col>
            <Form.Control as="select" custom value={apiName} onChange={handleApiSelect}>
              {
                Object.entries(apis).map((api, idx) => (
                  <option key={`api-list-${idx}`} value={api[1].url}>{api[0]}</option>
                ))
              }
            </Form.Control>
          </Col>
        </Form.Group>
      </Form>
      <Row className="mt-5">
        <Col>
          <Card>
            <Card.Header as="h4">JSON Data</Card.Header>
            <Card.Body>
              <ReactJson src={data} theme="monokai" style={{ maxHeight: '60vh', overflow: 'auto' }} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default InteractWithData
