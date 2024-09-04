export const schema = gql`
  type Event {
    eventId: Int!
    eventName: String!
    eventDate: DateTime!
    eventCity: String!
    eventCountry: String!
  }

  type Query {
    events: [Event!]! @requireAuth
    event(eventId: Int!): Event @requireAuth
  }

  input CreateEventInput {
    eventName: String!
    eventDate: DateTime!
    eventCity: String!
    eventCountry: String!
  }

  input UpdateEventInput {
    eventName: String
    eventDate: DateTime
    eventCity: String
    eventCountry: String
  }

  type Mutation {
    createEvent(input: CreateEventInput!): Event! @requireAuth
    updateEvent(eventId: Int!, input: UpdateEventInput!): Event! @requireAuth
    deleteEvent(eventId: Int!): Event! @requireAuth
  }
`
