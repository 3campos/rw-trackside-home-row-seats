import type {
  DeleteAddressMutation,
  DeleteAddressMutationVariables,
  FindAddressByAddressId,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

const DELETE_ADDRESS_MUTATION: TypedDocumentNode<
  DeleteAddressMutation,
  DeleteAddressMutationVariables
> = gql`
  mutation DeleteAddressMutation($addressId: Int!) {
    deleteAddress(addressId: $addressId) {
      addressId
    }
  }
`

interface Props {
  address: NonNullable<FindAddressByAddressId['address']>
}

const Address = ({ address }: Props) => {
  const [deleteAddress] = useMutation(DELETE_ADDRESS_MUTATION, {
    onCompleted: () => {
      toast.success('Address deleted')
      navigate(routes.addresses())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (
    addressId: DeleteAddressMutationVariables['addressId']
  ) => {
    if (confirm('Are you sure you want to delete address ' + addressId + '?')) {
      deleteAddress({ variables: { addressId } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Address {address.addressId} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Address id</th>
              <td>{address.addressId}</td>
            </tr>
            <tr>
              <th>Street Number</th>
              <td>{address.number}</td>
            </tr>
            <tr>
              <th>Street Name</th>
              <td>{address.street}</td>
            </tr>
            <tr>
              <th>City</th>
              <td>{address.city}</td>
            </tr>
            <tr>
              <th>State or province</th>
              <td>{address.stateOrProvince}</td>
            </tr>
            <tr>
              <th>Country</th>
              <td>{address.country}</td>
            </tr>
            <tr>
              <th>Rental id</th>
              <td>{address.rentalId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editAddress({ addressId: address.addressId })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(address.addressId)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Address
