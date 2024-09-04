import EditUserCell from 'src/components/User/EditUserCell'

type UserPageProps = {
  userId: number
}

const EditUserPage = ({ userId }: UserPageProps) => {
  return <EditUserCell userId={userId} />
}

export default EditUserPage
