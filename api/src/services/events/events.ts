import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const events: QueryResolvers['events'] = () => {
  return db.event.findMany()
}

export const event: QueryResolvers['event'] = ({ eventId }) => {
  return db.event.findUnique({
    where: { eventId },
  })
}

export const createEvent: MutationResolvers['createEvent'] = ({ input }) => {
  return db.event.create({
    data: input,
  })
}

export const updateEvent: MutationResolvers['updateEvent'] = ({
  eventId,
  input,
}) => {
  return db.event.update({
    data: input,
    where: { eventId },
  })
}

export const deleteEvent: MutationResolvers['deleteEvent'] = ({ eventId }) => {
  return db.event.delete({
    where: { eventId },
  })
}
