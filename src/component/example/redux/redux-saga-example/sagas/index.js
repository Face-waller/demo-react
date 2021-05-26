import { takeEvery ,put, call, fork } from 'redux-saga/effects'
import ActionTypes from 'src/component/example/redux/redux-saga-example/actions/action-types'

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function* setIsLoading(action) {
    yield put({
        type: ActionTypes.SET_IS_LOADING,
        isLoading: action.isLoading
    });
}
function* userAdd(action) {
    yield put({
        type: ActionTypes.SET_IS_LOADING,
        isLoading: true
    })
    // 延迟 1s 在执行 + 1操作
    yield call(delay, 2000);
    yield put({
        type: ActionTypes.USER_ADD,
        inputUser: action.inputUser
    });
    yield put({
        type: ActionTypes.SET_IS_LOADING,
        isLoading: false
    })
}
function * inputUserName(action) {
    yield put({
        type: ActionTypes.UPDATE_INPUT_USER,
        inputUserName: action.inputUserName,
    })
}

function* commonSaga() {
    yield takeEvery(ActionTypes.SET_IS_LOADING, setIsLoading)
}

function* userAddSaga() {
    yield takeEvery(ActionTypes.USER_ADD, userAdd)
}

function* inputSaga() {
    yield takeEvery(ActionTypes.SET_INPUT_USER, inputUserName)
}

export default function* rootSaga() {
    yield fork(commonSaga)
    yield fork(userAddSaga)
    yield fork(inputSaga)
}

