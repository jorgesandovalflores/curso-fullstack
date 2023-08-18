import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

const typeDefs = gql`
  type Book {
    id: ID
    title: String
  }

  type Query {
    books: [Book]
  }
`;

const books = [
  { id: '1', title: 'Book 1' },
  { id: '2', title: 'Book 2' },
  { id: '3', title: 'Book 3' },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();

async function startApolloServer() {
  await server.start();
  server.applyMiddleware({ app });
}

startApolloServer().then(() => {
  app.listen({ port: 4000 }, () => {
    console.log(`API GraphQL escuchando en http://localhost:4000${server.graphqlPath}`);
  });
});
