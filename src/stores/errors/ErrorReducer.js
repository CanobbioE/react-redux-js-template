import * as ErrorActions from './ErrorAction';

const INITIAL_STATE = {
    error: null
};

const ErrorReducer = (state = INITIAL_STATE, action) => {
    if (action.error) {
        return { ...state, error: action.payload };
    }

    const reduce = {
        [ErrorActions.ERRORS_ADD]: { ...state, error: action.payload },
        [ErrorActions.ERRORS_CLEAR]: { ...state, error: null }
    };
    
    const newState = reduce[action.type] || { ...INITIAL_STATE, ...state };
    return newState;
};

export default ErrorReducer;