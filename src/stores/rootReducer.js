import { combineReducers } from '@reduxjs/toolkit';
import ErrorReducer from './errors/ErrorReducer';
import LoadingReducer from './loading/LoadingReducer';
import AuthReducer from './auth/AuthReducer';
import LanguageReducer from './language/LanguageReducer';

export default combineReducers({
    loading: LoadingReducer,
    errors: ErrorReducer,
    auth: AuthReducer,
    i18n: LanguageReducer,
});