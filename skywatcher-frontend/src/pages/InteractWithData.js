import React, { useState } from 'react'
import { Button, Container, Row, Col, Card } from 'react-bootstrap'
import ReactJson from 'react-json-view'
import useFetch from "../services/UseFetch";

const apis = {
  location: 'http://localhost:4000/location',
  weather: 'http://localhost:4000/weather'
}



const InteractWithData = () => {
  const [apiUrl, setApiUrl] = useState(apis.location)
  const { data, error, loading } = useFetch(apiUrl)

  if (error) throw error
  if (loading) return <p>Loading API Data!</p>
  return (
    <Container>
      <h1>Select API Data to View</h1>
      <hr />
      <Row>
        <Col>
          <Button variant="secondary" block onClick={e => setApiUrl(apis.location)}>Location</Button>
        </Col>
        <Col>
          <Button variant="secondary" block onClick={e => setApiUrl(apis.weather)}>Weather</Button>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <Card>
            <Card.Header as="h4">JSON Data</Card.Header>
            <Card.Body>
              <Card.Text>
                <ReactJson src={data} />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default InteractWithData
