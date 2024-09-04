import type {
  EditEventByEventId,
  UpdateEventInput,
  UpdateEventMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import EventForm from 'src/components/Event/EventForm'

export const QUERY: TypedDocumentNode<EditEventByEventId> = gql`
  query EditEventByEventId($eventId: Int!) {
    event: event(eventId: $eventId) {
      eventId
      eventName
      eventDate
      eventCity
      eventCountry
    }
  }
`

const UPDATE_EVENT_MUTATION: TypedDocumentNode<
  EditEventById,
  UpdateEventMutationVariables
> = gql`
  mutation UpdateEventMutation($eventId: Int!, $input: UpdateEventInput!) {
    updateEvent(eventId: $eventId, input: $input) {
      eventId
      eventName
      eventDate
      eventCity
      eventCountry
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ event }: CellSuccessProps<EditEventByEventId>) => {
  const [updateEvent, { loading, error }] = useMutation(UPDATE_EVENT_MUTATION, {
    onCompleted: () => {
      toast.success('Event updated')
      navigate(routes.events())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (
    input: UpdateEventInput,
    id: EditEventByEventId['event']['id']
  ) => {
    updateEvent({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Event {event?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <EventForm
          event={event}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
