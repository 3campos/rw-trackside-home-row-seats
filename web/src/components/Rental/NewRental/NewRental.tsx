import type {
  CreateRentalMutation,
  CreateRentalInput,
  CreateRentalMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import RentalForm from 'src/components/Rental/RentalForm'

const CREATE_RENTAL_MUTATION: TypedDocumentNode<
  CreateRentalMutation,
  CreateRentalMutationVariables
> = gql`
  mutation CreateRentalMutation($input: CreateRentalInput!) {
    createRental(input: $input) {
      rentalId
    }
  }
`

const NewRental = () => {
  const [createRental, { loading, error }] = useMutation(
    CREATE_RENTAL_MUTATION,
    {
      onCompleted: () => {
        toast.success('Rental created')
        navigate(routes.rentals())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateRentalInput) => {
    createRental({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Rental</h2>
      </header>
      <div className="rw-segment-main">
        <RentalForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewRental
