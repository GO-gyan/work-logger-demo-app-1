import { 
    GraphQLNonNull,
    GraphQLID
} from 'graphql';
import AddressType from '../../types/AddressType';
import AddressService from '../../../service/addressService';

export default {
    type: AddressType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve: (root, { id }) => {
        return AddressService.findAddress(id);
    }
};