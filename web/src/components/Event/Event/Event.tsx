import type {
  DeleteEventMutation,
  DeleteEventMutationVariables,
  FindEventByEventId,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_EVENT_MUTATION: TypedDocumentNode<
  DeleteEventMutation,
  DeleteEventMutationVariables
> = gql`
  mutation DeleteEventMutation($eventId: Int!) {
    deleteEvent(eventId: $eventId) {
      eventId
    }
  }
`

interface Props {
  event: NonNullable<FindEventByEventId['event']>
}

const Event = ({ event }: Props) => {
  const [deleteEvent] = useMutation(DELETE_EVENT_MUTATION, {
    onCompleted: () => {
      toast.success('Event deleted')
      navigate(routes.events())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (eventId: DeleteEventMutationVariables['eventId']) => {
    if (confirm('Are you sure you want to delete event ' + eventId + '?')) {
      deleteEvent({ variables: { eventId } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Event {event.eventId} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Event id</th>
              <td>{event.eventId}</td>
            </tr>
            <tr>
              <th>Event name</th>
              <td>{event.eventName}</td>
            </tr>
            <tr>
              <th>Event date</th>
              <td>{timeTag(event.eventDate)}</td>
            </tr>
            <tr>
              <th>Event city</th>
              <td>{event.eventCity}</td>
            </tr>
            <tr>
              <th>Event country</th>
              <td>{event.eventCountry}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editEvent({ eventId: event.eventId })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(event.eventId)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Event
