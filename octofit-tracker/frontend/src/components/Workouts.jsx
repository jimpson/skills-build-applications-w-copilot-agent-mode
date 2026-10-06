import CollectionTable from './CollectionTable.jsx'
import useCollection from '../hooks/useCollection.js'

const columns = [
  { key: 'name', label: 'Workout' },
  { key: 'description', label: 'Description' },
  { key: 'type', label: 'Type' },
  { key: 'durationMinutes', label: 'Duration (min)' },
  { key: 'difficulty', label: 'Difficulty' },
  { key: 'targetAreas', label: 'Target areas' },
]

export default function Workouts() {
  const { collection, error, loading } = useCollection('/api/workouts/', fetch)

  return (
    <CollectionTable
      columns={columns}
      collection={collection}
      error={error}
      loading={loading}
      title="Workouts"
    />
  )
}
