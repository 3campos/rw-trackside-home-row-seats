import type { FindUserByUserId, FindUserByUserIdVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import User from 'src/components/User/User'

export const QUERY: TypedDocumentNode<
  FindUserByUserId,
  FindUserByUserIdVariables
> = gql`
  query FindUserByUserId($userId: Int!) {
    user: user(userId: $userId) {
      userId
      email
      firstName
      lastName
      phoneNumber
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>User not found</div>

export const Failure = ({
  error,
}: CellFailureProps<FindUserByUserIdVariables>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  user,
}: CellSuccessProps<FindUserByUserId, FindUserByUserIdVariables>) => {
  return <User user={user} />
}
