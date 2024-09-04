import EditRenterCell from 'src/components/Renter/EditRenterCell'

type RenterPageProps = {
  renterId: number
}

const EditRenterPage = ({ renterId }: RenterPageProps) => {
  return <EditRenterCell renterId={renterId} />
}

export default EditRenterPage
