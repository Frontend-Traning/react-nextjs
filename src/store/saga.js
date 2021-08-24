import { all, takeLatest } from 'redux-saga/effects'
import { initiaActionTypes, sceneActionTypes } from './actionTypes'
import middlewares from './middleware'

export default function* rootSaga() {
    yield all([
        takeLatest(initiaActionTypes.INITIATE, middlewares.initiate),
        takeLatest(sceneActionTypes.LOAD_SCENES, middlewares.loadDataScenes),
    ])
}
