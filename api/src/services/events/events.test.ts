import type { Event } from '@prisma/client'

import { events, event, createEvent, updateEvent, deleteEvent } from './events'
import type { StandardScenario } from './events.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('events', () => {
  scenario('returns all events', async (scenario: StandardScenario) => {
    const result = await events()

    expect(result.length).toEqual(Object.keys(scenario.event).length)
  })

  scenario('returns a single event', async (scenario: StandardScenario) => {
    const result = await event({ eventId: scenario.event.one.eventId })

    expect(result).toEqual(scenario.event.one)
  })

  scenario('creates a event', async () => {
    const result = await createEvent({
      input: {
        eventName: 'String',
        eventDate: '2024-09-04T18:39:17.385Z',
        eventCity: 'String',
        eventCountry: 'String',
      },
    })

    expect(result.eventName).toEqual('String')
    expect(result.eventDate).toEqual(new Date('2024-09-04T18:39:17.385Z'))
    expect(result.eventCity).toEqual('String')
    expect(result.eventCountry).toEqual('String')
  })

  scenario('updates a event', async (scenario: StandardScenario) => {
    const original = (await event({
      eventId: scenario.event.one.eventId,
    })) as Event
    const result = await updateEvent({
      eventId: original.eventId,
      input: { eventName: 'String2' },
    })

    expect(result.eventName).toEqual('String2')
  })

  scenario('deletes a event', async (scenario: StandardScenario) => {
    const original = (await deleteEvent({
      eventId: scenario.event.one.eventId,
    })) as Event
    const result = await event({ eventId: original.eventId })

    expect(result).toEqual(null)
  })
})
