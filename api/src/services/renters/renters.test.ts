import type { Renter } from '@prisma/client'

import {
  renters,
  renter,
  createRenter,
  updateRenter,
  deleteRenter,
} from './renters'
import type { StandardScenario } from './renters.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('renters', () => {
  scenario('returns all renters', async (scenario: StandardScenario) => {
    const result = await renters()

    expect(result.length).toEqual(Object.keys(scenario.renter).length)
  })

  scenario('returns a single renter', async (scenario: StandardScenario) => {
    const result = await renter({ renterId: scenario.renter.one.renterId })

    expect(result).toEqual(scenario.renter.one)
  })

  scenario('creates a renter', async () => {
    const result = await createRenter({
      input: {
        email: 'String3273824',
        phoneNumber: 'String4773269',
        firstName: 'String',
        lastName: 'String',
      },
    })

    expect(result.email).toEqual('String3273824')
    expect(result.phoneNumber).toEqual('String4773269')
    expect(result.firstName).toEqual('String')
    expect(result.lastName).toEqual('String')
  })

  scenario('updates a renter', async (scenario: StandardScenario) => {
    const original = (await renter({
      renterId: scenario.renter.one.renterId,
    })) as Renter
    const result = await updateRenter({
      renterId: original.renterId,
      input: { email: 'String28847682' },
    })

    expect(result.email).toEqual('String28847682')
  })

  scenario('deletes a renter', async (scenario: StandardScenario) => {
    const original = (await deleteRenter({
      renterId: scenario.renter.one.renterId,
    })) as Renter
    const result = await renter({ renterId: original.renterId })

    expect(result).toEqual(null)
  })
})
