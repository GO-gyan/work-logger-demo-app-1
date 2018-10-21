import { GraphQLID } from 'graphql';
import ClientType from '../../types/ClientType';
import ClientInput from '../../inputs/client';
import UserService from '../../../service/userService';

export default {
    type: ClientType,
    args: {
        userId: {
            type: GraphQLID
        },
        client: {
            type: ClientInput
        }
    },
    resolve: (root, { userId, client }, req) => {
        return UserService.addClient(userId, client);
    }
};