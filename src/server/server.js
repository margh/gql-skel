import express from 'express';
import { apolloConnect, graphiqlExpress } from 'apollo-server';
import path from 'path';
import { schema } from './schema/schema';
import bodyParser from 'body-parser';

const PORT = 3000;

// Serve static resources
const app = express();
app.use('/', express.static(path.resolve(__dirname, '../../dist')));
app.use('/graphql', bodyParser.json(), apolloConnect({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
app.listen(PORT, () => console.log(`App - http://localhost:${PORT}`));
