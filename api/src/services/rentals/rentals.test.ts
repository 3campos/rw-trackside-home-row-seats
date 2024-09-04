import type { Rental } from '@prisma/client'

import {
  rentals,
  rental,
  createRental,
  updateRental,
  deleteRental,
} from './rentals'
import type { StandardScenario } from './rentals.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('rentals', () => {
  scenario('returns all rentals', async (scenario: StandardScenario) => {
    const result = await rentals()

    expect(result.length).toEqual(Object.keys(scenario.rental).length)
  })

  scenario('returns a single rental', async (scenario: StandardScenario) => {
    const result = await rental({ rentalId: scenario.rental.one.rentalId })

    expect(result).toEqual(scenario.rental.one)
  })

  scenario('creates a rental', async () => {
    const result = await createRental({
      input: { seatingType: 'String', price: 1495667, guestLimit: 5741995 },
    })

    expect(result.seatingType).toEqual('String')
    expect(result.price).toEqual(1495667)
    expect(result.guestLimit).toEqual(5741995)
  })

  scenario('updates a rental', async (scenario: StandardScenario) => {
    const original = (await rental({
      rentalId: scenario.rental.one.rentalId,
    })) as Rental
    const result = await updateRental({
      rentalId: original.rentalId,
      input: { seatingType: 'String2' },
    })

    expect(result.seatingType).toEqual('String2')
  })

  scenario('deletes a rental', async (scenario: StandardScenario) => {
    const original = (await deleteRental({
      rentalId: scenario.rental.one.rentalId,
    })) as Rental
    const result = await rental({ rentalId: original.rentalId })

    expect(result).toEqual(null)
  })
})
