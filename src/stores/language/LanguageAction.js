import Action from '../../utils/Action';

export const SET_LANGUAGE = 'Language.set';

export const setLanguage = (language) => Action.createDefault(SET_LANGUAGE, {language}); 
