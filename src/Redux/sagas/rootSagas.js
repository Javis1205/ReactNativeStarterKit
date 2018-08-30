import {all} from 'redux-saga/effects';
import {
    watchLogin,
    watchRegister
} from './authSaga';
export default function* root() {
    yield all([
        watchLogin(),
        watchRegister()
    ]);
}