import * as ErrorActions from '../stores/errors/ErrorAction';


export const errorsMiddleware = () => () => next => (action) => {
    if (action.error) {
        const errAction = action;

        return next(ErrorActions.add(errAction.payload));
    }

    next(ErrorActions.clear());
    next(action);
};