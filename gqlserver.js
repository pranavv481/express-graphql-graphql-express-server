const { ApolloServer } = require('apollo-server');
require('dotenv').config()

const typeDefs = `
  type Query {
   totalStudents:Int!
  }
  `

  const resolvers = {
    Query: {
      totalStudents:()=>400
    },
  };

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  
  apolloServer.listen(process.env.PORT,()=>{
    console.log(`Graphql Server ready at ${process.env.PORT}`);
  });