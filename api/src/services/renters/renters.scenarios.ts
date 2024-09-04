import type { Prisma, Renter } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.RenterCreateArgs>({
  renter: {
    one: {
      data: {
        email: 'String8567597',
        phoneNumber: 'String6942105',
        firstName: 'String',
        lastName: 'String',
      },
    },
    two: {
      data: {
        email: 'String7933476',
        phoneNumber: 'String3999584',
        firstName: 'String',
        lastName: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Renter, 'renter'>
