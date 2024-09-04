import EventCell from 'src/components/Event/EventCell'

type EventPageProps = {
  eventId: number
}

const EventPage = ({ eventId }: EventPageProps) => {
  return <EventCell eventId={eventId} />
}

export default EventPage
