import type { FindRenters, FindRentersVariables } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Renters from 'src/components/Renter/Renters'

export const QUERY: TypedDocumentNode<FindRenters, FindRentersVariables> = gql`
  query FindRenters {
    renters {
      renterId
      email
      phoneNumber
      firstName
      lastName
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No renters yet. '}
      <Link to={routes.newRenter()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps<FindRenters>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  renters,
}: CellSuccessProps<FindRenters, FindRentersVariables>) => {
  return <Renters renters={renters} />
}
