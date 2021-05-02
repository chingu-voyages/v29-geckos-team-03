import React from 'react'
import useFetch from "../services/UseFetch";

const api_url = 'http://localhost:4000/weather'

const InteractWithData = () => {
  const { data, error, loading } = useFetch(api_url)

  if (error) throw error
  if (loading) return <p>Still Loading!</p>
  return (
    <div>
      <p>Interact with Data Here!</p>
      <p>{JSON.stringify(data)}</p>
    </div>
  )
}

export default InteractWithData
