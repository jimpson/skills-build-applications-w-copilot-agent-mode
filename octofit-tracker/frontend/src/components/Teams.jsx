import CollectionTable from './CollectionTable.jsx'
import useCollection from '../hooks/useCollection.js'

const columns = [
  { key: 'name', label: 'Team' },
  { key: 'description', label: 'About' },
  { key: 'members', label: 'Members' },
]

export default function Teams() {
  const { collection, error, loading } = useCollection('/api/teams/', fetch)

  return (
    <CollectionTable
      columns={columns}
      collection={collection}
      error={error}
      loading={loading}
      title="Teams"
    />
  )
}
