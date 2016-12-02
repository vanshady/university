const express = require('express');

const app = express();

const graphqlHTTP = require('express-graphql');

const schema = require('./schema');

const open = require('open');

const port = process.env.PORT || 3000;

const cors = require('cors');

app
  .use('/graphql', cors(), graphqlHTTP({
    schema,
    graphiql: true,
    pretty: true,
  }))
  .listen(3000, () => {
    console.log(`GraphQL server running on http://localhost:${port}/graphql`);
  });

open(`http://localhost:${port}/graphql`);
