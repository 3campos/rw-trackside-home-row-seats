import type { Prisma, Rental } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.RentalCreateArgs>({
  rental: {
    one: {
      data: {
        seatingType: 'String',
        price: 1139189,
        guestLimit: 8326954,
        renter: {
          create: {
            email: 'String9098922',
            phoneNumber: 'String352485',
            firstName: 'String',
            lastName: 'String',
          },
        },
      },
    },
    two: {
      data: {
        seatingType: 'String',
        price: 9866569,
        guestLimit: 6992066,
        renter: {
          create: {
            email: 'String7096365',
            phoneNumber: 'String4621526',
            firstName: 'String',
            lastName: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Rental, 'rental'>
