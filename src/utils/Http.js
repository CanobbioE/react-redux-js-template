import axios from 'axios';
import { baseURL } from '../constants/endpoints';
import Errors from '../constants/Errors';
import HttpErrorModel from '../models/HttpErrorModel';

const RequestMethod = {
    GET: 'get',
    POST: 'post',
    PATCH: 'patch',
    PUT: 'put',
    DELETE: 'delete',
};

const RequestHeaders = {
    ContentType: 'Content-Type',
    Authorization: 'Authorization'
};

const ContentType = {
    ApplicationJSON: 'application/json',
    MultipartFormData: 'multipart/form-data',
};

async function _request(method, endpoint, headers, data) {
    const url = `${baseURL}${endpoint}`;
    const cfg = {
        headers,
        url,
        method,
        data
    };

    try {
        const response = await axios(cfg);

        const { status, statusText, data } = response;

        if (data.success === false) {
            return _handleError({ code: status, message: statusText, raw: data });
        }

        return { ...response };

    } catch (e) {
        if (e.response) {
            const { code, status, message } = e.response.data;
            return _handleError({ code, message, status, raw: e.response.data });
        }

        if (e.request) {
            const { status, statusText, data } = e.request;
            return _handleError({ code: status, message: statusText, raw: data });
        }

        console.log(e);
        return _handleError({ raw: e });
    }
}

function _handleError({ code, message, status = 0, raw = null }) {
    const model = new HttpErrorModel();
    model.code = code || Errors.UNKNOWN.code;
    model.message = message || Errors.UNKNOWN.message;
    model.status = status;
    model.raw = raw;

    return model;
}

function _setHeaders({ contentType = ContentType.ApplicationJSON, authToken }) {
    const headers = {};
    headers[`${RequestHeaders.ContentType}`] = contentType;
    headers[`${RequestHeaders.Authorization}`] = authToken;

    return headers;
}

const get = async (endpoint, authToken) => {
    return await _request(RequestMethod.GET, endpoint, _setHeaders({authToken}));
};

const post = async (endpoint, authToken, data, contentType = ContentType.ApplicationJSON) => {
    return await _request(RequestMethod.POST, endpoint, _setHeaders({contentType, authToken}), data);
};


export default { get, post, ContentType };
