import Action from '../../utils/Action';

const INITIAL_STATE = {
    isLoading: false
};

const LoadingReducer = (state = INITIAL_STATE, action) => {

    if (action.type.includes(Action.LOADING_SUFFIX)) {
        return { ...state, isLoading: true };
    }

    if (action.type.includes(Action.DONE_SUFFIX) || action.error) {
        return { ...state, isLoading: false };
    }

    return { ...state };
};

export default LoadingReducer;