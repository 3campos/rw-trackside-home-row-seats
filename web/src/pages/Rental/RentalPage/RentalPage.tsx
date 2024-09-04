import RentalCell from 'src/components/Rental/RentalCell'

type RentalPageProps = {
  rentalId: number
}

const RentalPage = ({ rentalId }: RentalPageProps) => {
  return <RentalCell rentalId={rentalId} />
}

export default RentalPage
