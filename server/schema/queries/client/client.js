import { 
    GraphQLNonNull,
    GraphQLID
} from 'graphql';
import ClientType from '../../types/ClientType';
import ClientService from '../../../service/clientService';

export default {
    type: ClientType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve: (root, { id }) => {
        return ClientService.findClient(id);
    }
};