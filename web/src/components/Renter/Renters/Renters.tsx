import type {
  DeleteRenterMutation,
  DeleteRenterMutationVariables,
  FindRenters,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Renter/RentersCell'
import { truncate } from 'src/lib/formatters'

const DELETE_RENTER_MUTATION: TypedDocumentNode<
  DeleteRenterMutation,
  DeleteRenterMutationVariables
> = gql`
  mutation DeleteRenterMutation($renterId: Int!) {
    deleteRenter(renterId: $renterId) {
      renterId
    }
  }
`

const RentersList = ({ renters }: FindRenters) => {
  const [deleteRenter] = useMutation(DELETE_RENTER_MUTATION, {
    onCompleted: () => {
      toast.success('Renter deleted')
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
    renterId: DeleteRenterMutationVariables['renterId']
  ) => {
    if (confirm('Are you sure you want to delete renter ' + renterId + '?')) {
      deleteRenter({ variables: { renterId } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Renter id</th>
            <th>Email</th>
            <th>Phone number</th>
            <th>First name</th>
            <th>Last name</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {renters.map((renter) => (
            <tr key={renter.renterId}>
              <td>{truncate(renter.renterId)}</td>
              <td>{truncate(renter.email)}</td>
              <td>{truncate(renter.phoneNumber)}</td>
              <td>{truncate(renter.firstName)}</td>
              <td>{truncate(renter.lastName)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.renter({ renterId: renter.renterId })}
                    title={'Show renter ' + renter.renterId + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editRenter({ renterId: renter.renterId })}
                    title={'Edit renter ' + renter.renterId}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete renter ' + renter.renterId}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(renter.renterId)}
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

export default RentersList
