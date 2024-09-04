import type {
  EditAddressByAddressId,
  UpdateAddressInput,
  UpdateAddressMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import AddressForm from 'src/components/Address/AddressForm'

export const QUERY: TypedDocumentNode<EditAddressByAddressId> = gql`
  query EditAddressByAddressId($addressId: Int!) {
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

const UPDATE_ADDRESS_MUTATION: TypedDocumentNode<
  EditAddressById,
  UpdateAddressMutationVariables
> = gql`
  mutation UpdateAddressMutation(
    $addressId: Int!
    $input: UpdateAddressInput!
  ) {
    updateAddress(addressId: $addressId, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  address,
}: CellSuccessProps<EditAddressByAddressId>) => {
  const [updateAddress, { loading, error }] = useMutation(
    UPDATE_ADDRESS_MUTATION,
    {
      onCompleted: () => {
        toast.success('Address updated')
        navigate(routes.addresses())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateAddressInput,
    id: EditAddressByAddressId['address']['id']
  ) => {
    updateAddress({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Address {address?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <AddressForm
          address={address}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
