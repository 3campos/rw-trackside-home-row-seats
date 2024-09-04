import type { Address } from '@prisma/client'

import {
  addresses,
  address,
  createAddress,
  updateAddress,
  deleteAddress,
} from './addresses'
import type { StandardScenario } from './addresses.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('addresses', () => {
  scenario('returns all addresses', async (scenario: StandardScenario) => {
    const result = await addresses()

    expect(result.length).toEqual(Object.keys(scenario.address).length)
  })

  scenario('returns a single address', async (scenario: StandardScenario) => {
    const result = await address({ addressId: scenario.address.one.addressId })

    expect(result).toEqual(scenario.address.one)
  })

  scenario('creates a address', async (scenario: StandardScenario) => {
    const result = await createAddress({
      input: {
        street: 'String',
        number: 1034553,
        city: 'String',
        stateOrProvince: 'String',
        country: 'String',
        rentalId: scenario.address.two.rentalId,
      },
    })

    expect(result.street).toEqual('String')
    expect(result.number).toEqual(1034553)
    expect(result.city).toEqual('String')
    expect(result.stateOrProvince).toEqual('String')
    expect(result.country).toEqual('String')
    expect(result.rentalId).toEqual(scenario.address.two.rentalId)
  })

  scenario('updates a address', async (scenario: StandardScenario) => {
    const original = (await address({
      addressId: scenario.address.one.addressId,
    })) as Address
    const result = await updateAddress({
      addressId: original.addressId,
      input: { street: 'String2' },
    })

    expect(result.street).toEqual('String2')
  })

  scenario('deletes a address', async (scenario: StandardScenario) => {
    const original = (await deleteAddress({
      addressId: scenario.address.one.addressId,
    })) as Address
    const result = await address({ addressId: original.addressId })

    expect(result).toEqual(null)
  })
})
