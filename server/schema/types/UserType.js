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
            description: `User's ID`,
            resolve: (user) => {
                return user.id;
            }
        },
        name: {
            type: GraphQLString,
            description: `User's full name`,
            resolve: (user) => {
                return user.name;
            }
        },
        email: {
            type: GraphQLString,
            description: `User's email`,
            resolve: (user) => {
                return user.email;
            }
        }
    }
})