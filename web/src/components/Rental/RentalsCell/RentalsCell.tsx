import type { FindRentals, FindRentalsVariables } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Rentals from 'src/components/Rental/Rentals'

export const QUERY: TypedDocumentNode<FindRentals, FindRentalsVariables> = gql`
  query FindRentals {
    rentals {
      rentalId
      seatingType
      price
      guestLimit
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No rentals yet. '}
      <Link to={routes.newRental()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps<FindRentals>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  rentals,
}: CellSuccessProps<FindRentals, FindRentalsVariables>) => {
  return <Rentals rentals={rentals} />
}
