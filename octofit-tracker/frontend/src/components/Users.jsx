import CollectionTable from './CollectionTable.jsx'
import useCollection from '../hooks/useCollection.js'

const columns = [
  { key: 'username', label: 'Username' },
  { key: 'firstName', label: 'First name' },
  { key: 'lastName', label: 'Last name' },
  { key: 'email', label: 'Email' },
  { key: 'team', label: 'Team' },
]

export default function Users() {
  const { collection, error, loading } = useCollection('/api/users/', fetch)

  return (
    <CollectionTable
      columns={columns}
      collection={collection}
      error={error}
      loading={loading}
      title="Users"
    />
  )
}
