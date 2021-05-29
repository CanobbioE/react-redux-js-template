import Action from '../../utils/Action';

export const ERRORS_CLEAR = 'Errors.clear';

export const clear = () => Action.createDefault(ERRORS_CLEAR);

export const ERRORS_ADD = 'Errors.add';

export const add = error => Action.createDefault(ERRORS_ADD, error, true);