import type {
  FindRenterByRenterId,
  FindRenterByRenterIdVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Renter from 'src/components/Renter/Renter'

export const QUERY: TypedDocumentNode<
  FindRenterByRenterId,
  FindRenterByRenterIdVariables
> = gql`
  query FindRenterByRenterId($renterId: Int!) {
    renter: renter(renterId: $renterId) {
      renterId
      email
      phoneNumber
      firstName
      lastName
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Renter not found</div>

export const Failure = ({
  error,
}: CellFailureProps<FindRenterByRenterIdVariables>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  renter,
}: CellSuccessProps<FindRenterByRenterId, FindRenterByRenterIdVariables>) => {
  return <Renter renter={renter} />
}
