import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLList
} from 'graphql';

export default new GraphQLObjectType({
    name: 'ClientType',
    description: 'Clients, added by user',
    fields: {
        id: {
            type: GraphQLID,
            description: `Client's ID`
        },
        companyName: {
            type: GraphQLString,
            description: `Company full name`
        },
        name: {
            type: GraphQLString,
            description: `Client's full name`
        },
        email: {
            type: GraphQLString,
            description: `Company email`
        }
    }
})