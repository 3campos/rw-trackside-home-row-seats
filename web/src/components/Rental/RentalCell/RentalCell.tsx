import type {
  FindRentalByRentalId,
  FindRentalByRentalIdVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Rental from 'src/components/Rental/Rental'

export const QUERY: TypedDocumentNode<
  FindRentalByRentalId,
  FindRentalByRentalIdVariables
> = gql`
  query FindRentalByRentalId($rentalId: Int!) {
    rental: rental(rentalId: $rentalId) {
      rentalId
      seatingType
      price
      guestLimit
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Rental not found</div>

export const Failure = ({
  error,
}: CellFailureProps<FindRentalByRentalIdVariables>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  rental,
}: CellSuccessProps<FindRentalByRentalId, FindRentalByRentalIdVariables>) => {
  return <Rental rental={rental} />
}
