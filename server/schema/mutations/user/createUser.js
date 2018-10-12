import UserType from '../../types/UserType';
import UserInput from '../../inputs/user';
import UserService from '../../../service/userService';

export default {
    type: UserType,
    args: {
        user: {
            type: UserInput
        }
    },
    resolve: (root, { user }, req) => {
        const { name, email, password } = user;
        return UserService.addUser({ name, email, password, req });
    }
};