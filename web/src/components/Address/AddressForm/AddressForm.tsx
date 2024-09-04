import type { EditAddressByAddressId, UpdateAddressInput } from 'types/graphql'

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

type FormAddress = NonNullable<EditAddressByAddressId['address']>

interface AddressFormProps {
  address?: EditAddressByAddressId['address']
  onSave: (
    data: UpdateAddressInput,
    addressId?: FormAddress['addressId']
  ) => void
  error: RWGqlError
  loading: boolean
}

const AddressForm = (props: AddressFormProps) => {
  const onSubmit = (data: FormAddress) => {
    props.onSave(data, props?.address?.addressId)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormAddress> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="number"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Street Number
        </Label>

        <NumberField
          name="number"
          defaultValue={props.address?.number}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="number" className="rw-field-error" />

        <Label
          name="street"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Street Name
        </Label>

        <TextField
          name="street"
          defaultValue={props.address?.street}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="street" className="rw-field-error" />

        <Label
          name="city"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          City
        </Label>

        <TextField
          name="city"
          defaultValue={props.address?.city}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="city" className="rw-field-error" />

        <Label
          name="stateOrProvince"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          State or province
        </Label>

        <TextField
          name="stateOrProvince"
          defaultValue={props.address?.stateOrProvince}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="stateOrProvince" className="rw-field-error" />

        <Label
          name="country"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Country
        </Label>

        <TextField
          name="country"
          defaultValue={props.address?.country}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="country" className="rw-field-error" />

        <Label
          name="rentalId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Rental id
        </Label>

        <NumberField
          name="rentalId"
          defaultValue={props.address?.rentalId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="rentalId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default AddressForm
