import EditRentalCell from 'src/components/Rental/EditRentalCell'

type RentalPageProps = {
  rentalId: number
}

const EditRentalPage = ({ rentalId }: RentalPageProps) => {
  return <EditRentalCell rentalId={rentalId} />
}

export default EditRentalPage
