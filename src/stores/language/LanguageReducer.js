import * as LanguageAction from './LanguageAction';

const INITIAL_STATE = {
    language: localStorage.getItem('language') || 'EN'
};

const LanguageReducer = (state = INITIAL_STATE, action) => {
    if (action.type == LanguageAction.SET_LANGUAGE) {
        localStorage.setItem('language', action.payload.language);
        return { ...state, language: action.payload.language };
    }

    return { ...INITIAL_STATE, ...state };
};

export default LanguageReducer;