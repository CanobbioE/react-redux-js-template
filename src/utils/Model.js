import HttpErrorModel from '../models/HttpErrorModel';
import Http from './Http';

const fromGet = async (ApiModel, endpoint, params) => {
    const response = await Http.get(endpoint, params?.auth);
    return _mapToModel(ApiModel, response);
};

const fromPost = async (ApiModel, endpoint, params) => {

    const response = await Http.post(endpoint, params?.auth, params?.data, params?.contentType);

    return _mapToModel(ApiModel, response);
};

function _mapToModel(ApiModel, response) {
    if (response instanceof HttpErrorModel) {
        return response;
    }

    return _handleResponseType(ApiModel, response.data);
}


function _handleResponseType(ApiModel, data) {
    return Array.isArray(data) ?
        data.map(json => new ApiModel(json)) :
        new ApiModel(data);
}


export default { fromGet, fromPost };