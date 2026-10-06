import CollectionTable from './CollectionTable.jsx'
import useCollection from '../hooks/useCollection.js'

const columns = [
  { key: 'rank', label: 'Rank' },
  { key: 'user', label: 'Athlete' },
  { key: 'team', label: 'Team' },
  { key: 'points', label: 'Points' },
  { key: 'period', label: 'Period' },
]

export default function Leaderboard() {
  const { collection, error, loading } = useCollection('/api/leaderboard/', fetch)

  return (
    <CollectionTable
      columns={columns}
      collection={collection}
      error={error}
      loading={loading}
      title="Leaderboard"
    />
  )
}
