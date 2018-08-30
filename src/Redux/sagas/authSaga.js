import { put, takeLatest } from 'redux-saga/effects';
import { requestAPI } from '../service/request';
import * as types from '../actions/types';
import * as api from '../service/api';

function* register(action) {
    const response = yield requestAPI(api.Register, api.POST, action.params);
    if (action.onComplete) {
        action.onComplete(response);
    }
    if (response.meta.status === 200) {
        yield put({
            type: types.CURRENT_USER_REGISTER_FINISH,
            response
        });
    }
}

function* login(action) {
    const response = yield requestAPI(api.Login, api.POST, action.params);
    if (action.onComplete) {
        action.onComplete(response);
    }
    if (response.meta.status === 200) {
        yield put({
            type: types.CURRENT_USER_LOGIN_FINISH,
            response
        });
    }
}


export function* watchRegister() {
    yield takeLatest(types.CURRENT_USER_REGISTER, register);
}

export function* watchLogin() {
    yield takeLatest(types.CURRENT_USER_LOGIN, login);
}