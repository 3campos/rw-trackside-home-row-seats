import AddressCell from 'src/components/Address/AddressCell'

type AddressPageProps = {
  addressId: number
}

const AddressPage = ({ addressId }: AddressPageProps) => {
  return <AddressCell addressId={addressId} />
}

export default AddressPage
