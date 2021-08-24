import { put } from 'redux-saga/effects'
import { initiaActionTypes } from './actionTypes'
import { loadScenesSuccess, failure } from './action';

function kickStart() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('DONE'), 0)
    })
}

function* initiate() {
    try {
        const result = yield kickStart()
        window.logMessage('initiation: ' + result)
        yield put({
            type: initiaActionTypes.INITIATED,
        })
    } catch (error) {}
}

function* loadDataScenes() {
    try {
      const res = yield fetch(process.env.NEXT_PUBLIC_SCENES_URL)
      const data = yield res.json()
      yield put(loadScenesSuccess(data))
    } catch (err) {
      yield put(failure(err))
    }
}
  
const middlewares = {
    initiate,
    loadDataScenes
}

export default middlewares
