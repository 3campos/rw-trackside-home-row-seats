import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        email: 'String6035719',
        firstName: 'String',
        lastName: 'String',
        phoneNumber: 'String3390495',
      },
    },
    two: {
      data: {
        email: 'String825920',
        firstName: 'String',
        lastName: 'String',
        phoneNumber: 'String5411035',
      },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
