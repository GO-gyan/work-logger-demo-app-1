import { GraphQLID } from 'graphql';
import AddressType from '../../types/AddressType';
import AddressInput from '../../inputs/address';
import ClientService from '../../../service/clientService';

export default {
    type: AddressType,
    args: {
        clientId: {
            type: GraphQLID
        },
        address: {
            type: AddressInput
        }
    },
    resolve: (root, { clientId, address }, req) => {
        return ClientService.addAddress(clientId, address);
    }
};