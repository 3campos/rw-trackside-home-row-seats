import type {
  QueryResolvers,
  MutationResolvers,
  RenterRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const renters: QueryResolvers['renters'] = () => {
  return db.renter.findMany()
}

export const renter: QueryResolvers['renter'] = ({ renterId }) => {
  return db.renter.findUnique({
    where: { renterId },
  })
}

export const createRenter: MutationResolvers['createRenter'] = ({ input }) => {
  return db.renter.create({
    data: input,
  })
}

export const updateRenter: MutationResolvers['updateRenter'] = ({
  renterId,
  input,
}) => {
  return db.renter.update({
    data: input,
    where: { renterId },
  })
}

export const deleteRenter: MutationResolvers['deleteRenter'] = ({
  renterId,
}) => {
  return db.renter.delete({
    where: { renterId },
  })
}

export const Renter: RenterRelationResolvers = {
  rentals: (_obj, { root }) => {
    return db.renter
      .findUnique({ where: { renterId: root?.renterId } })
      .rentals()
  },
}
