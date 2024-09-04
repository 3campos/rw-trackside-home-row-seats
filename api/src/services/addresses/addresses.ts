import type {
  QueryResolvers,
  MutationResolvers,
  AddressRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const addresses: QueryResolvers['addresses'] = () => {
  return db.address.findMany()
}

export const address: QueryResolvers['address'] = ({ addressId }) => {
  return db.address.findUnique({
    where: { addressId },
  })
}

export const createAddress: MutationResolvers['createAddress'] = ({
  input,
}) => {
  return db.address.create({
    data: input,
  })
}

export const updateAddress: MutationResolvers['updateAddress'] = ({
  addressId,
  input,
}) => {
  return db.address.update({
    data: input,
    where: { addressId },
  })
}

export const deleteAddress: MutationResolvers['deleteAddress'] = ({
  addressId,
}) => {
  return db.address.delete({
    where: { addressId },
  })
}

export const Address: AddressRelationResolvers = {
  rental: (_obj, { root }) => {
    return db.address
      .findUnique({ where: { addressId: root?.addressId } })
      .rental()
  },
}
