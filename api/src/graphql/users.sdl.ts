export const schema = gql`
  type User {
    userId: Int!
    email: String!
    firstName: String!
    lastName: String!
    phoneNumber: String!
  }

  type Query {
    users: [User!]! @requireAuth
    user(userId: Int!): User @requireAuth
  }

  input CreateUserInput {
    email: String!
    firstName: String!
    lastName: String!
    phoneNumber: String!
  }

  input UpdateUserInput {
    email: String
    firstName: String
    lastName: String
    phoneNumber: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(userId: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(userId: Int!): User! @requireAuth
  }
`
