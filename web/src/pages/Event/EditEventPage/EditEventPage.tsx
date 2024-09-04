import EditEventCell from 'src/components/Event/EditEventCell'

type EventPageProps = {
  eventId: number
}

const EditEventPage = ({ eventId }: EventPageProps) => {
  return <EditEventCell eventId={eventId} />
}

export default EditEventPage
