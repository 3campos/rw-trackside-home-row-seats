import type {
  CreateAddressMutation,
  CreateAddressInput,
  CreateAddressMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import AddressForm from 'src/components/Address/AddressForm'

const CREATE_ADDRESS_MUTATION: TypedDocumentNode<
  CreateAddressMutation,
  CreateAddressMutationVariables
> = gql`
  mutation CreateAddressMutation($input: CreateAddressInput!) {
    createAddress(input: $input) {
      addressId
    }
  }
`

const NewAddress = () => {
  const [createAddress, { loading, error }] = useMutation(
    CREATE_ADDRESS_MUTATION,
    {
      onCompleted: () => {
        toast.success('Address created')
        navigate(routes.addresses())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateAddressInput) => {
    createAddress({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Address</h2>
      </header>
      <div className="rw-segment-main">
        <AddressForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewAddress
