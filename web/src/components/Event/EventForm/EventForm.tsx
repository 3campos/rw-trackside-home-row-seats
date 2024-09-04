import type { EditEventByEventId, UpdateEventInput } from 'types/graphql'

import type { RWGqlError } from '@redwoodjs/forms'
import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  DatetimeLocalField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

type FormEvent = NonNullable<EditEventByEventId['event']>

interface EventFormProps {
  event?: EditEventByEventId['event']
  onSave: (data: UpdateEventInput, eventId?: FormEvent['eventId']) => void
  error: RWGqlError
  loading: boolean
}

const EventForm = (props: EventFormProps) => {
  const onSubmit = (data: FormEvent) => {
    props.onSave(data, props?.event?.eventId)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormEvent> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="eventName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Event name
        </Label>

        <TextField
          name="eventName"
          defaultValue={props.event?.eventName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="eventName" className="rw-field-error" />

        <Label
          name="eventDate"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Event date
        </Label>

        <DatetimeLocalField
          name="eventDate"
          defaultValue={formatDatetime(props.event?.eventDate)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="eventDate" className="rw-field-error" />

        <Label
          name="eventCity"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Event city
        </Label>

        <TextField
          name="eventCity"
          defaultValue={props.event?.eventCity}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="eventCity" className="rw-field-error" />

        <Label
          name="eventCountry"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Event country
        </Label>

        <TextField
          name="eventCountry"
          defaultValue={props.event?.eventCountry}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="eventCountry" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default EventForm
