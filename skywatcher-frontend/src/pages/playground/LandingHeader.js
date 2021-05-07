import React, { useState, useEffect } from 'react'
import { CTHeaderDaysButton, CTHeader, CTHeaderTitle } from './CityTimeHeader.style'
import useFetch from '../../services/UseFetch'
import { Button, Col, Row } from 'react-bootstrap'

const LandingHeader = ({ api_url }) => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [someDate, setSomeDate] = useState(null)
  const { data, error, loading } = useFetch(api_url)

  useEffect(() => {
    let timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => {
      clearInterval(timer)
    }
  })

  if (loading) return <p>Still Loading!</p>
  if (error) throw error

  return (
    <CTHeader as={Row}>
      <CTHeaderTitle as={Col}>{data.city.name}</CTHeaderTitle>
      <Col>
        <Row>
          <p>{currentTime.toLocaleString()}</p>
        </Row>
        <Row>
          <Button onClick={() => setSomeDate(Date(data.list[0].dt))}>Click</Button>

          <CTHeaderDaysButton>
            {someDate}
          </CTHeaderDaysButton>
        </Row>
      </Col>
    </CTHeader>
  )
}

export default LandingHeader
