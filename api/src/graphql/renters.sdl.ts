export const schema = gql`
  type Renter {
    renterId: Int!
    email: String!
    phoneNumber: String!
    firstName: String!
    lastName: String!
    rentals: [Rental]!
  }

  type Query {
    renters: [Renter!]! @requireAuth
    renter(renterId: Int!): Renter @requireAuth
  }

  input CreateRenterInput {
    email: String!
    phoneNumber: String!
    firstName: String!
    lastName: String!
  }

  input UpdateRenterInput {
    email: String
    phoneNumber: String
    firstName: String
    lastName: String
  }

  type Mutation {
    createRenter(input: CreateRenterInput!): Renter! @requireAuth
    updateRenter(renterId: Int!, input: UpdateRenterInput!): Renter!
      @requireAuth
    deleteRenter(renterId: Int!): Renter! @requireAuth
  }
`
