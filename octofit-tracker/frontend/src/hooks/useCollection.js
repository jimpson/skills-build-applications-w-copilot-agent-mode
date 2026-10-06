import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'

export default function useCollection(endpoint, fetcher) {
  const [collection, setCollection] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController()

    async function loadCollection() {
      setLoading(true)
      setError('')

      try {
        const records = await fetchCollection(endpoint, fetcher, controller.signal)
        setCollection(records)
      } catch (requestError) {
        if (!controller.signal.aborted) {
          setError(requestError instanceof Error ? requestError.message : 'Unable to load data.')
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    loadCollection()
    return () => controller.abort()
  }, [endpoint, fetcher])

  return { collection, error, loading }
}
