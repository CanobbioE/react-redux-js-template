import { endpoints } from '../../constants/endpoints';
import LoginModel from '../../models/auth/LoginModel';
import Model from '../../utils/Model';

const login = async (email, password) => {

    const params = {
        data: {
            email,
            password,
        }
    };

    return await Model.fromPost(LoginModel, endpoints.auth.login, params);
};


export default {login };