import type {
  QueryResolvers,
  MutationResolvers,
  RentalRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const rentals: QueryResolvers['rentals'] = () => {
  return db.rental.findMany()
}

export const rental: QueryResolvers['rental'] = ({ rentalId }) => {
  return db.rental.findUnique({
    where: { rentalId },
  })
}

export const createRental: MutationResolvers['createRental'] = ({ input }) => {
  return db.rental.create({
    data: input,
  })
}

export const updateRental: MutationResolvers['updateRental'] = ({
  rentalId,
  input,
}) => {
  return db.rental.update({
    data: input,
    where: { rentalId },
  })
}

export const deleteRental: MutationResolvers['deleteRental'] = ({
  rentalId,
}) => {
  return db.rental.delete({
    where: { rentalId },
  })
}

export const Rental: RentalRelationResolvers = {
  address: (_obj, { root }) => {
    return db.rental
      .findUnique({ where: { rentalId: root?.rentalId } })
      .address()
  },
  renter: (_obj, { root }) => {
    return db.rental
      .findUnique({ where: { rentalId: root?.rentalId } })
      .renter()
  },
}
