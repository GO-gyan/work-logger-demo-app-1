import express from 'express';
import expressGraphQL from 'express-graphql';
import bodyParser from 'body-parser';
import schema from './schema';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Application started at 4000');
})