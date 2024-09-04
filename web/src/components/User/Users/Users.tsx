import type {
  DeleteUserMutation,
  DeleteUserMutationVariables,
  FindUsers,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/User/UsersCell'
import { truncate } from 'src/lib/formatters'

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

const UsersList = ({ users }: FindUsers) => {
  const [deleteUser] = useMutation(DELETE_USER_MUTATION, {
    onCompleted: () => {
      toast.success('User deleted')
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

  const onDeleteClick = (userId: DeleteUserMutationVariables['userId']) => {
    if (confirm('Are you sure you want to delete user ' + userId + '?')) {
      deleteUser({ variables: { userId } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>User id</th>
            <th>Email</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Phone number</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.userId}>
              <td>{truncate(user.userId)}</td>
              <td>{truncate(user.email)}</td>
              <td>{truncate(user.firstName)}</td>
              <td>{truncate(user.lastName)}</td>
              <td>{truncate(user.phoneNumber)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.user({ userId: user.userId })}
                    title={'Show user ' + user.userId + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editUser({ userId: user.userId })}
                    title={'Edit user ' + user.userId}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete user ' + user.userId}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(user.userId)}
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

export default UsersList
