import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'

import { distinctApiDays } from '../../services/DateHelpers'
import { CTHeaderDaysButton, CTHeader, CTHeaderTitle, CTHeaderTime } from './CityTimeHeader.style'

const LandingHeader = ({ city, list }) => {
  const [currentTime, setCurrentTime] = useState(Date())

  useEffect(() => {
    let timer = setInterval(() => setCurrentTime(Date()), 1000)
    return () => {
      clearInterval(timer)
    }
  })

  return (
    <CTHeader as={Row}>
      <CTHeaderTitle as={Col} md={6} xs={12} className="mt-2 mb-3">{city.name}</CTHeaderTitle>
      <Col md={6} xs={12}>
        <Row className="justify-content-center">
          <CTHeaderTime>{currentTime}</CTHeaderTime>
        </Row>
        <Row className="justify-content-center">
            {
              distinctApiDays(list).map((dt, idx) => (
                <CTHeaderDaysButton key={`${dt}-${idx}-button`}>{dt}</CTHeaderDaysButton>
              ))
            }
        </Row>
      </Col>
    </CTHeader>
  )
}

export default LandingHeader
