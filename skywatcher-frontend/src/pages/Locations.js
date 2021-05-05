import React from 'react'
import { Container } from 'react-bootstrap'

import useFetch from '../services/UseFetch'

const location_url = 'http://localhost:4000/location'

const Locations = () => {
  const { data, error, loading } = useFetch(location_url)

  if (error) throw error
  if (loading) return <p>Still Loading!</p>
  return (
    <Container>
      <h1>Location Page</h1>
      <hr />{ data &&
      <div className="mt-5">
        {
          data.map(item => (
            <>
              <p>ID: {item.id}</p>
              <p>Place: {item.place}</p>
            </>
          ))
        }
      </div>}
    </Container>
  )
}

export default Locations
