import UserCell from 'src/components/User/UserCell'

type UserPageProps = {
  userId: number
}

const UserPage = ({ userId }: UserPageProps) => {
  return <UserCell userId={userId} />
}

export default UserPage
