import { 
    GraphQLNonNull,
    GraphQLID
} from 'graphql';
import UserType from '../../types/UserType';
import UserService from '../../../service/userService';

export default {
    type: UserType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve: (root, { id }) => {
        return UserService.findUser(id);
    }
};