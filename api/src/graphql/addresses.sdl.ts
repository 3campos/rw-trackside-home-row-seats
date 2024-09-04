export const schema = gql`
  type Address {
    addressId: Int!
    street: String!
    number: Int!
    city: String!
    stateOrProvince: String!
    country: String!
    rental: Rental!
    rentalId: Int!
  }

  type Query {
    addresses: [Address!]! @requireAuth
    address(addressId: Int!): Address @requireAuth
  }

  input CreateAddressInput {
    street: String!
    number: Int!
    city: String!
    stateOrProvince: String!
    country: String!
    rentalId: Int!
  }

  input UpdateAddressInput {
    street: String
    number: Int
    city: String
    stateOrProvince: String
    country: String
    rentalId: Int
  }

  type Mutation {
    createAddress(input: CreateAddressInput!): Address! @requireAuth
    updateAddress(addressId: Int!, input: UpdateAddressInput!): Address!
      @requireAuth
    deleteAddress(addressId: Int!): Address! @requireAuth
  }
`
