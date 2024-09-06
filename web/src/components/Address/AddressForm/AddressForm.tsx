import axios from 'axios'
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

declare let google: any

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY

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
  // const onSubmit = (data: FormAddress) => {
  //   props.onSave(data, props?.address?.addressId)
  // }

  // let addressInput = ''

  // const onSubmit = (data: FormAddress) => {
  //   const addressInput = Object.values(data).join(' ')
  //   console.log(addressInput)
  // }

  const onSubmit = (data: FormAddress) => {
    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}`
    script.async = true
    script.defer = true
    document.head.appendChild(script)

    type GoogleGeocodingResponse = {
      results: {
        geometry: { location: { lat: number; lng: number } }
      }[]
      status: 'OK' | 'ZERO_RESULTS'
    }
    const enteredAddress = Object.values(data).join(' ')

    axios
      .get<GoogleGeocodingResponse>(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
          enteredAddress
        )}&key=${GOOGLE_API_KEY}`
      )
      .then((response) => {
        if (response.data.status !== 'OK') {
          throw new Error('Could not fetch location!')
        }
        const coordinates = response.data.results[0].geometry.location
        const map = new google.maps.Map(document.getElementById('map'), {
          center: coordinates,
          zoom: 16,
        })
        new google.maps.Marker({ position: coordinates, map: map })
      })
      .catch((err) => {
        alert(err.message)
        console.log(err.message)
      })
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
