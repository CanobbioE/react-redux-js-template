import HttpErrorModel from '../models/HttpErrorModel';

const DONE_SUFFIX = '_COMPLETE';
const LOADING_SUFFIX = '_LOADING';

const createDefault = (type, payload = undefined, error = false, meta = null) => {
    return { type, payload, error, meta };
};

const createThunk = async (dispatch, type, effect, ...args) => {
    dispatch(createDefault(`${type}${LOADING_SUFFIX}`));

    const model = await effect(...args);
    const isError = model instanceof HttpErrorModel;

    dispatch(createDefault(`${type}${DONE_SUFFIX}`, model, isError));

    return model;
};

export default {createDefault, createThunk, DONE_SUFFIX, LOADING_SUFFIX};