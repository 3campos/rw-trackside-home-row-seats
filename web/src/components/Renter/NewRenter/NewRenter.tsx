import type {
  CreateRenterMutation,
  CreateRenterInput,
  CreateRenterMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import RenterForm from 'src/components/Renter/RenterForm'

const CREATE_RENTER_MUTATION: TypedDocumentNode<
  CreateRenterMutation,
  CreateRenterMutationVariables
> = gql`
  mutation CreateRenterMutation($input: CreateRenterInput!) {
    createRenter(input: $input) {
      renterId
    }
  }
`

const NewRenter = () => {
  const [createRenter, { loading, error }] = useMutation(
    CREATE_RENTER_MUTATION,
    {
      onCompleted: () => {
        toast.success('Renter created')
        navigate(routes.renters())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateRenterInput) => {
    createRenter({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Renter</h2>
      </header>
      <div className="rw-segment-main">
        <RenterForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewRenter
