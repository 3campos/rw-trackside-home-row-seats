import type { User } from '@prisma/client'

import { users, user, createUser, updateUser, deleteUser } from './users'
import type { StandardScenario } from './users.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('users', () => {
  scenario('returns all users', async (scenario: StandardScenario) => {
    const result = await users()

    expect(result.length).toEqual(Object.keys(scenario.user).length)
  })

  scenario('returns a single user', async (scenario: StandardScenario) => {
    const result = await user({ userId: scenario.user.one.userId })

    expect(result).toEqual(scenario.user.one)
  })

  scenario('creates a user', async () => {
    const result = await createUser({
      input: {
        email: 'String9225608',
        firstName: 'String',
        lastName: 'String',
        phoneNumber: 'String8851718',
      },
    })

    expect(result.email).toEqual('String9225608')
    expect(result.firstName).toEqual('String')
    expect(result.lastName).toEqual('String')
    expect(result.phoneNumber).toEqual('String8851718')
  })

  scenario('updates a user', async (scenario: StandardScenario) => {
    const original = (await user({ userId: scenario.user.one.userId })) as User
    const result = await updateUser({
      userId: original.userId,
      input: { email: 'String73574032' },
    })

    expect(result.email).toEqual('String73574032')
  })

  scenario('deletes a user', async (scenario: StandardScenario) => {
    const original = (await deleteUser({
      userId: scenario.user.one.userId,
    })) as User
    const result = await user({ userId: original.userId })

    expect(result).toEqual(null)
  })
})
