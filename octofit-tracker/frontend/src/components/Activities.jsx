import CollectionTable from './CollectionTable.jsx'
import useCollection from '../hooks/useCollection.js'

const columns = [
  { key: 'activityType', label: 'Activity' },
  { key: 'user', label: 'User' },
  { key: 'durationMinutes', label: 'Duration (min)' },
  { key: 'distanceKm', label: 'Distance (km)' },
  { key: 'caloriesBurned', label: 'Calories' },
  { key: 'date', label: 'Date', render: ({ date }) => date && new Date(date).toLocaleDateString() },
]

export default function Activities() {
  const { collection, error, loading } = useCollection('/api/activities/', fetch)

  return (
    <CollectionTable
      columns={columns}
      collection={collection}
      error={error}
      loading={loading}
      title="Activities"
    />
  )
}
