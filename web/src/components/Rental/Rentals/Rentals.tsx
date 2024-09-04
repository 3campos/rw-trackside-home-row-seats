import type {
  DeleteRentalMutation,
  DeleteRentalMutationVariables,
  FindRentals,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Rental/RentalsCell'
import { truncate } from 'src/lib/formatters'

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

const RentalsList = ({ rentals }: FindRentals) => {
  const [deleteRental] = useMutation(DELETE_RENTAL_MUTATION, {
    onCompleted: () => {
      toast.success('Rental deleted')
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
    rentalId: DeleteRentalMutationVariables['rentalId']
  ) => {
    if (confirm('Are you sure you want to delete rental ' + rentalId + '?')) {
      deleteRental({ variables: { rentalId } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Rental id</th>
            <th>Seating type</th>
            <th>Price</th>
            <th>Guest limit</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {rentals.map((rental) => (
            <tr key={rental.rentalId}>
              <td>{truncate(rental.rentalId)}</td>
              <td>{truncate(rental.seatingType)}</td>
              <td>{truncate(rental.price)}</td>
              <td>{truncate(rental.guestLimit)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.rental({ rentalId: rental.rentalId })}
                    title={'Show rental ' + rental.rentalId + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editRental({ rentalId: rental.rentalId })}
                    title={'Edit rental ' + rental.rentalId}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete rental ' + rental.rentalId}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(rental.rentalId)}
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

export default RentalsList
