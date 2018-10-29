import { GraphQLID, GraphQLString } from 'graphql';
import InvoiceType from '../../types/InvoiceType';
import ClientService from '../../../service/clientService';

export default {
    type: InvoiceType,
    args: {
        assignmentId: {
            type: GraphQLID
        },
        description: {
            type: GraphQLString
        }
    },
    resolve: (root, { assignmentId, description }, req) => {
        return ClientService.addAddress(assignmentId, description);
    }
};