import type {
  EditRentalByRentalId,
  UpdateRentalInput,
  UpdateRentalMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import RentalForm from 'src/components/Rental/RentalForm'

export const QUERY: TypedDocumentNode<EditRentalByRentalId> = gql`
  query EditRentalByRentalId($rentalId: Int!) {
    rental: rental(rentalId: $rentalId) {
      rentalId
      seatingType
      price
      guestLimit
    }
  }
`

const UPDATE_RENTAL_MUTATION: TypedDocumentNode<
  EditRentalById,
  UpdateRentalMutationVariables
> = gql`
  mutation UpdateRentalMutation($rentalId: Int!, $input: UpdateRentalInput!) {
    updateRental(rentalId: $rentalId, input: $input) {
      rentalId
      seatingType
      price
      guestLimit
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ rental }: CellSuccessProps<EditRentalByRentalId>) => {
  const [updateRental, { loading, error }] = useMutation(
    UPDATE_RENTAL_MUTATION,
    {
      onCompleted: () => {
        toast.success('Rental updated')
        navigate(routes.rentals())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateRentalInput,
    id: EditRentalByRentalId['rental']['id']
  ) => {
    updateRental({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Rental {rental?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <RentalForm
          rental={rental}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
