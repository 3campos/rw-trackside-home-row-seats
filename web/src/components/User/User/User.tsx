import type {
  DeleteUserMutation,
  DeleteUserMutationVariables,
  FindUserByUserId,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

const DELETE_USER_MUTATION: TypedDocumentNode<
  DeleteUserMutation,
  DeleteUserMutationVariables
> = gql`
  mutation DeleteUserMutation($userId: Int!) {
    deleteUser(userId: $userId) {
      userId
    }
  }
`

interface Props {
  user: NonNullable<FindUserByUserId['user']>
}

const User = ({ user }: Props) => {
  const [deleteUser] = useMutation(DELETE_USER_MUTATION, {
    onCompleted: () => {
      toast.success('User deleted')
      navigate(routes.users())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (userId: DeleteUserMutationVariables['userId']) => {
    if (confirm('Are you sure you want to delete user ' + userId + '?')) {
      deleteUser({ variables: { userId } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            User {user.userId} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>User id</th>
              <td>{user.userId}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{user.email}</td>
            </tr>
            <tr>
              <th>First name</th>
              <td>{user.firstName}</td>
            </tr>
            <tr>
              <th>Last name</th>
              <td>{user.lastName}</td>
            </tr>
            <tr>
              <th>Phone number</th>
              <td>{user.phoneNumber}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editUser({ userId: user.userId })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(user.userId)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default User
