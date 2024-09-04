import type {
  DeleteAddressMutation,
  DeleteAddressMutationVariables,
  FindAddresses,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Address/AddressesCell'
import { truncate } from 'src/lib/formatters'

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

const AddressesList = ({ addresses }: FindAddresses) => {
  const [deleteAddress] = useMutation(DELETE_ADDRESS_MUTATION, {
    onCompleted: () => {
      toast.success('Address deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (
    addressId: DeleteAddressMutationVariables['addressId']
  ) => {
    if (confirm('Are you sure you want to delete address ' + addressId + '?')) {
      deleteAddress({ variables: { addressId } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Address id</th>
            <th>Street</th>
            <th>Number</th>
            <th>City</th>
            <th>State or province</th>
            <th>Country</th>
            <th>Rental id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {addresses.map((address) => (
            <tr key={address.addressId}>
              <td>{truncate(address.addressId)}</td>
              <td>{truncate(address.street)}</td>
              <td>{truncate(address.number)}</td>
              <td>{truncate(address.city)}</td>
              <td>{truncate(address.stateOrProvince)}</td>
              <td>{truncate(address.country)}</td>
              <td>{truncate(address.rentalId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.address({ addressId: address.addressId })}
                    title={'Show address ' + address.addressId + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editAddress({ addressId: address.addressId })}
                    title={'Edit address ' + address.addressId}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete address ' + address.addressId}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(address.addressId)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AddressesList
