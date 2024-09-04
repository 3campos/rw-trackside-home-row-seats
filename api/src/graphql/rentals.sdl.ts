export const schema = gql`
  type Rental {
    rentalId: Int!
    seatingType: String!
    price: Int!
    address: Address
    guestLimit: Int!
    renter: Renter!
  }

  type Query {
    rentals: [Rental!]! @requireAuth
    rental(rentalId: Int!): Rental @requireAuth
  }

  input CreateRentalInput {
    seatingType: String!
    price: Int!
    guestLimit: Int!
  }

  input UpdateRentalInput {
    seatingType: String
    price: Int
    guestLimit: Int
  }

  type Mutation {
    createRental(input: CreateRentalInput!): Rental! @requireAuth
    updateRental(rentalId: Int!, input: UpdateRentalInput!): Rental!
      @requireAuth
    deleteRental(rentalId: Int!): Rental! @requireAuth
  }
`
