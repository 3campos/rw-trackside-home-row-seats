import type {
  FindEventByEventId,
  FindEventByEventIdVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Event from 'src/components/Event/Event'

export const QUERY: TypedDocumentNode<
  FindEventByEventId,
  FindEventByEventIdVariables
> = gql`
  query FindEventByEventId($eventId: Int!) {
    event: event(eventId: $eventId) {
      eventId
      eventName
      eventDate
      eventCity
      eventCountry
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Event not found</div>

export const Failure = ({
  error,
}: CellFailureProps<FindEventByEventIdVariables>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  event,
}: CellSuccessProps<FindEventByEventId, FindEventByEventIdVariables>) => {
  return <Event event={event} />
}
