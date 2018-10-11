import { 
    GraphQLNonNull,
    GraphQLID
} from 'graphql';
import UserType from '../../types/UserType';

export default {
    type: UserType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve: (root, { id }) => {
        return id;
    }
};