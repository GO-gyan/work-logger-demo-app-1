import { GraphQLID } from 'graphql';
import AssignmentType from '../../types/AssignmentType';
import AssignmentInput from '../../inputs/assignment';
import ClientService from '../../../service/clientService';

export default {
    type: AssignmentType,
    args: {
        clientId: {
            type: GraphQLID
        },
        assignment: {
            type: AssignmentInput
        }
    },
    resolve: (root, { clientId, assignment }, req) => {
        return ClientService.addAssignment(clientId, assignment);
    }
};