import type {
  DeleteRenterMutation,
  DeleteRenterMutationVariables,
  FindRenterByRenterId,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

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

interface Props {
  renter: NonNullable<FindRenterByRenterId['renter']>
}

const Renter = ({ renter }: Props) => {
  const [deleteRenter] = useMutation(DELETE_RENTER_MUTATION, {
    onCompleted: () => {
      toast.success('Renter deleted')
      navigate(routes.renters())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (
    renterId: DeleteRenterMutationVariables['renterId']
  ) => {
    if (confirm('Are you sure you want to delete renter ' + renterId + '?')) {
      deleteRenter({ variables: { renterId } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Renter {renter.renterId} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Renter id</th>
              <td>{renter.renterId}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{renter.email}</td>
            </tr>
            <tr>
              <th>Phone number</th>
              <td>{renter.phoneNumber}</td>
            </tr>
            <tr>
              <th>First name</th>
              <td>{renter.firstName}</td>
            </tr>
            <tr>
              <th>Last name</th>
              <td>{renter.lastName}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editRenter({ renterId: renter.renterId })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(renter.renterId)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Renter
