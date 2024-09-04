import type {
  EditRenterByRenterId,
  UpdateRenterInput,
  UpdateRenterMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import RenterForm from 'src/components/Renter/RenterForm'

export const QUERY: TypedDocumentNode<EditRenterByRenterId> = gql`
  query EditRenterByRenterId($renterId: Int!) {
    renter: renter(renterId: $renterId) {
      renterId
      email
      phoneNumber
      firstName
      lastName
    }
  }
`

const UPDATE_RENTER_MUTATION: TypedDocumentNode<
  EditRenterById,
  UpdateRenterMutationVariables
> = gql`
  mutation UpdateRenterMutation($renterId: Int!, $input: UpdateRenterInput!) {
    updateRenter(renterId: $renterId, input: $input) {
      renterId
      email
      phoneNumber
      firstName
      lastName
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ renter }: CellSuccessProps<EditRenterByRenterId>) => {
  const [updateRenter, { loading, error }] = useMutation(
    UPDATE_RENTER_MUTATION,
    {
      onCompleted: () => {
        toast.success('Renter updated')
        navigate(routes.renters())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateRenterInput,
    id: EditRenterByRenterId['renter']['id']
  ) => {
    updateRenter({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Renter {renter?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <RenterForm
          renter={renter}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
