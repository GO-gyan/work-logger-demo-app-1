import { GraphQLID } from 'graphql';
import WorkType from '../../types/WorkType';
import WorkInput from '../../inputs/work';
import ClientService from '../../../service/clientService';

export default {
    type: WorkType,
    args: {
        assignmentId: {
            type: GraphQLID
        },
        work: {
            type: WorkInput
        }
    },
    resolve: (root, { assignmentId, work }, req) => {
        return ClientService.addAddress(assignmentId, work);
    }
};