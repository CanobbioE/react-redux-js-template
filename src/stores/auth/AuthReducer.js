import * as AuthAction from './AuthAction';

const INITIAL_STATE = {
    authenticated: Boolean(localStorage.getItem('token') !== '' && localStorage.getItem('token')),
    token: localStorage.getItem('token')
};

const AuthReducer = (state = INITIAL_STATE, action) => {
    const token = action.payload?.token;

    switch (action.type) {

    case AuthAction.AUTH_LOGIN_COMPLETE:
        localStorage.setItem('token', token);
        return { ...state, authenticated: Boolean(token), token: token };

    case AuthAction.AUTH_LOGOUT:
        localStorage.setItem('token', '');
        return { ...state, authenticated: false, token: '' };
    }

    return { ...INITIAL_STATE, ...state };
};

export default AuthReducer;