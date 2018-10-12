import express from 'express';
import expressGraphQL from 'express-graphql';
import bodyParser from 'body-parser';
import cors from 'cors';
import './model';
import DB from './db';
import schema from './schema';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

DB.on('error', console.error.bind(console, 'connection error:'));
DB.once('open', function() {
  console.log('Connected to Mongo');
});

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Application started at 4000');
})