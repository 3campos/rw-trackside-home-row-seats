import type {
  FindAddressByAddressId,
  FindAddressByAddressIdVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Address from 'src/components/Address/Address'

export const QUERY: TypedDocumentNode<
  FindAddressByAddressId,
  FindAddressByAddressIdVariables
> = gql`
  query FindAddressByAddressId($addressId: Int!) {
    address: address(addressId: $addressId) {
      addressId
      street
      number
      city
      stateOrProvince
      country
      rentalId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Address not found</div>

export const Failure = ({
  error,
}: CellFailureProps<FindAddressByAddressIdVariables>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  address,
}: CellSuccessProps<
  FindAddressByAddressId,
  FindAddressByAddressIdVariables
>) => {
  return <Address address={address} />
}
