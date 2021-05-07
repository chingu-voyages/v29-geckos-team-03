import React from 'react'
import { Container } from 'react-bootstrap'
import LandingHeader from './LandingHeader'

const api_url = `https://api.openweathermap.org/data/2.5/forecast?q=New%20York&appid=${process.env.REACT_APP_OPEN_WEATHER_API}`

const SchoolClosing = () => {
  return (
    <Container>
      <LandingHeader api_url={api_url} />
    </Container>
  )
}

export default SchoolClosing
