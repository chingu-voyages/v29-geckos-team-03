import { useState, useEffect } from 'react'
import axios from 'axios'

export default function useFetch(url) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function init() {
      try {
        const res = await axios.get(url)
        setData(res.data)
      } catch (e) {
        setError(e)
      } finally {
        setLoading(false)
      }
    }
    init()
  }, [url])

  return { data, error, loading }
}