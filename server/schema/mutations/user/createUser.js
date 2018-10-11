import UserType from '../../types/UserType';
import UserInput from '../../inputs/user';

export default {
    type: UserType,
    args: {
        user: {
            type: UserInput
        }
    },
    resolve: (root, args) => {
        return args.name;
    }
};