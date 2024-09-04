import type { Prisma, Address } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.AddressCreateArgs>({
  address: {
    one: {
      data: {
        street: 'String',
        number: 9657235,
        city: 'String',
        stateOrProvince: 'String',
        country: 'String',
        rental: {
          create: {
            seatingType: 'String',
            price: 8681132,
            guestLimit: 8730717,
            renter: {
              create: {
                email: 'String3123508',
                phoneNumber: 'String4823915',
                firstName: 'String',
                lastName: 'String',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        street: 'String',
        number: 5521967,
        city: 'String',
        stateOrProvince: 'String',
        country: 'String',
        rental: {
          create: {
            seatingType: 'String',
            price: 7267459,
            guestLimit: 3123333,
            renter: {
              create: {
                email: 'String8513984',
                phoneNumber: 'String4638666',
                firstName: 'String',
                lastName: 'String',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Address, 'address'>
