const express = require("express");
const { ApolloServer} = require('apollo-server-express');
const http = require("http");
require('dotenv').config();

const app = express()

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

  apolloServer.applyMiddleware({app})

   const httpServer = http.createServer(app);

app.get("/check",(req, res)=>{
    res.send("hii")
})

app.listen(process.env.PORT, ()=>{
    console.log(`server started at ${process.env.PORT}`)
    console.log(`graphql server started at ${process.env.PORT} ${apolloServer.graphqlPath}`)
})

