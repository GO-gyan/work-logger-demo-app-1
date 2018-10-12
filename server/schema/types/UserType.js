import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString
} from 'graphql';

export default new GraphQLObjectType({
    name: 'UserType',
    description: 'User of the work logger application',
    fields: {
        id: {
            type: GraphQLID,
            description: `User's ID`
        },
        name: {
            type: GraphQLString,
            description: `User's full name`
        },
        email: {
            type: GraphQLString,
            description: `User's email`
        }
    }
})