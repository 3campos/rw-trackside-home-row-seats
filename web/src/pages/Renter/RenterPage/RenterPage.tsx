import RenterCell from 'src/components/Renter/RenterCell'

type RenterPageProps = {
  renterId: number
}

const RenterPage = ({ renterId }: RenterPageProps) => {
  return <RenterCell renterId={renterId} />
}

export default RenterPage
