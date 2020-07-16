import { ApolloServer } from "apollo-server-express";
import express from "express";
import {resolvers} from './resolvers'
import {typeDefs} from './typeDefs'


const startServer = async () => {
  const app = express();


  //TODO: Create resolver and typeDefs files
  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  server.applyMiddleware({ app });


  app.listen({ port: 5001 }, () =>
    console.log(`🚀 Server ready at http://localhost:5001${server.graphqlPath}`)
  );
};

startServer();