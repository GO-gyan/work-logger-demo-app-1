import { 
    GraphQLNonNull,
    GraphQLID
} from 'graphql';
import AssignmentType from '../../types/AssignmentType';
import AssignmentService from '../../../service/assignmentService';

export default {
    type: AssignmentType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve: (root, { id }) => {
        return AssignmentService.findAssignment(id);
    }
};