import EditAddressCell from 'src/components/Address/EditAddressCell'

type AddressPageProps = {
  addressId: number
}

const EditAddressPage = ({ addressId }: AddressPageProps) => {
  return <EditAddressCell addressId={addressId} />
}

export default EditAddressPage
