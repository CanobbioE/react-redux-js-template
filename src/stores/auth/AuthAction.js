import Action from '../../utils/Action';
import AuthEffects from './AuthEffects';

export const AUTH_LOGIN = 'Auth.login';
export const AUTH_LOGIN_COMPLETE = `${AUTH_LOGIN}${Action.DONE_SUFFIX}`;
export const AUTH_LOGIN_LOADING = `${AUTH_LOGIN}${Action.LOADING_SUFFIX}`;

export const login = (email, password) => async (dispatch) => {
    await Action.createThunk(dispatch, AUTH_LOGIN, AuthEffects.login, email, password);
};

export const AUTH_LOGOUT = 'Auth.logout';
export const logout = () => Action.createDefault(AUTH_LOGOUT);
