import type {
  DeleteRentalMutation,
  DeleteRentalMutationVariables,
  FindRentalByRentalId,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

const DELETE_RENTAL_MUTATION: TypedDocumentNode<
  DeleteRentalMutation,
  DeleteRentalMutationVariables
> = gql`
  mutation DeleteRentalMutation($rentalId: Int!) {
    deleteRental(rentalId: $rentalId) {
      rentalId
    }
  }
`

interface Props {
  rental: NonNullable<FindRentalByRentalId['rental']>
}

const Rental = ({ rental }: Props) => {
  const [deleteRental] = useMutation(DELETE_RENTAL_MUTATION, {
    onCompleted: () => {
      toast.success('Rental deleted')
      navigate(routes.rentals())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (
    rentalId: DeleteRentalMutationVariables['rentalId']
  ) => {
    if (confirm('Are you sure you want to delete rental ' + rentalId + '?')) {
      deleteRental({ variables: { rentalId } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Rental {rental.rentalId} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Rental id</th>
              <td>{rental.rentalId}</td>
            </tr>
            <tr>
              <th>Seating type</th>
              <td>{rental.seatingType}</td>
            </tr>
            <tr>
              <th>Price</th>
              <td>{rental.price}</td>
            </tr>
            <tr>
              <th>Guest limit</th>
              <td>{rental.guestLimit}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editRental({ rentalId: rental.rentalId })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(rental.rentalId)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Rental
