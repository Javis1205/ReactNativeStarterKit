import axios from 'axios';
import {Alert, Platform} from 'react-native';
import * as api from './api';
import {store} from '../store';
import * as types from "../actions/type";

const MimeLookup = require('mime-lookup');
const mime = new MimeLookup(require('mime-db'));

const defaultNetworkError = {
    meta: {
        status: 0,
        msg: 'An error occurred while processing your request. Please try again later.'
    },
    response: null
};

const defaultInvalidToken = {
    meta: {
        status: 401,
        msg: 'Login session expired. Please login again.'
    },
    response: null
};

function request(options, type) {
    return axios(options);
};

function* requestAPI(path, method, params, timeout = 10000) {
    let baseURL = path.indexOf('http') === -1 ? api.API : '';
    let additionPath = path;
    let accessToken = store.getState().auth.userdata ? store.getState().auth.userdata.access_token : '';

    if (accessToken != undefined && accessToken != null && accessToken.length > 0) {
        if (additionPath.indexOf('?') > -1) {
            additionPath = `${additionPath}&access_token=${accessToken}&device=${Platform.OS}`
        }
        else {
            additionPath = `${additionPath}?access_token=${accessToken}&device=${Platform.OS}`
        }
    }
    else {
        if (additionPath.indexOf('?') > -1) {
            additionPath = `${additionPath}&device=${Platform.OS}`
        }
        else {
            additionPath = `${additionPath}?device=${Platform.OS}`
        }
    }

    let header = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
    };

    try {
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();
        const response = yield axios.request({
            url: additionPath,
            method: method,
            baseURL: baseURL,
            headers: header,
            params: method === api.GET ? params : null,
            data: method === api.POST ? params : null,
            timeout: timeout,
            responseType: 'json',
            responseEncoding: 'utf8',
            cancelToken: source.token
        });
        console.log(method, baseURL + '/' + additionPath, params);
        console.log(response.data);
        if (response.status === 9001) {
            Alert.alert('', response.meta.msg, [{
                text: 'OK',
                onPress: () => {}
            }], {cancelable: true});
            return defaultInvalidToken;
        }
        return response.status === 200 ? response.data : defaultNetworkError;
    }
    catch (e) {
        console.log(method, baseURL + '/' + additionPath, params, e.message);
        return defaultNetworkError;
    }
};

export {
    requestAPI,
    request
}