import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLList
} from 'graphql';
import ClientType from './ClientType';
import UserService from '../../service/userService';

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
        },
        clients: {
            type: new GraphQLList(ClientType),
            description: `List of the added clients`,
            resolve: (root) => {
                return UserService.getClients(root.id);
            }
        }
    }
})