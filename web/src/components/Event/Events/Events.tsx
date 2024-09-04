import type {
  DeleteEventMutation,
  DeleteEventMutationVariables,
  FindEvents,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Event/EventsCell'
import { timeTag, truncate } from 'src/lib/formatters'

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

const EventsList = ({ events }: FindEvents) => {
  const [deleteEvent] = useMutation(DELETE_EVENT_MUTATION, {
    onCompleted: () => {
      toast.success('Event deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (eventId: DeleteEventMutationVariables['eventId']) => {
    if (confirm('Are you sure you want to delete event ' + eventId + '?')) {
      deleteEvent({ variables: { eventId } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Event id</th>
            <th>Event name</th>
            <th>Event date</th>
            <th>Event city</th>
            <th>Event country</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.eventId}>
              <td>{truncate(event.eventId)}</td>
              <td>{truncate(event.eventName)}</td>
              <td>{timeTag(event.eventDate)}</td>
              <td>{truncate(event.eventCity)}</td>
              <td>{truncate(event.eventCountry)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.event({ eventId: event.eventId })}
                    title={'Show event ' + event.eventId + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editEvent({ eventId: event.eventId })}
                    title={'Edit event ' + event.eventId}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete event ' + event.eventId}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(event.eventId)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default EventsList
