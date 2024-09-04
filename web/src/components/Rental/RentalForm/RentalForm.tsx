import type { EditRentalByRentalId, UpdateRentalInput } from 'types/graphql'

import type { RWGqlError } from '@redwoodjs/forms'
import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

type FormRental = NonNullable<EditRentalByRentalId['rental']>

interface RentalFormProps {
  rental?: EditRentalByRentalId['rental']
  onSave: (data: UpdateRentalInput, rentalId?: FormRental['rentalId']) => void
  error: RWGqlError
  loading: boolean
}

const RentalForm = (props: RentalFormProps) => {
  const onSubmit = (data: FormRental) => {
    props.onSave(data, props?.rental?.rentalId)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormRental> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="seatingType"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Seating type
        </Label>

        <TextField
          name="seatingType"
          defaultValue={props.rental?.seatingType}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="seatingType" className="rw-field-error" />

        <Label
          name="price"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Price
        </Label>

        <NumberField
          name="price"
          defaultValue={props.rental?.price}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="price" className="rw-field-error" />

        <Label
          name="guestLimit"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Guest limit
        </Label>

        <NumberField
          name="guestLimit"
          defaultValue={props.rental?.guestLimit}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="guestLimit" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default RentalForm
