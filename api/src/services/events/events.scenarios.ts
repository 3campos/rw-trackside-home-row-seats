import type { Prisma, Event } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.EventCreateArgs>({
  event: {
    one: {
      data: {
        eventName: 'String',
        eventDate: '2024-09-04T18:39:17.390Z',
        eventCity: 'String',
        eventCountry: 'String',
      },
    },
    two: {
      data: {
        eventName: 'String',
        eventDate: '2024-09-04T18:39:17.390Z',
        eventCity: 'String',
        eventCountry: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Event, 'event'>
