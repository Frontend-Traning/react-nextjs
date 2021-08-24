import { counterActionTypes, sceneActionTypes, initiaActionTypes } from './actionTypes'

export function increment() {
    return { type: counterActionTypes.INCREMENT }
}

export function decrement() {
    return { type: counterActionTypes.DECREMENT }
}

export function incrementByAmount(value) {
    return { type: counterActionTypes.INCREMENT_BY_AMOUNT, value }
}

export function loadScenes() {
    return { type: sceneActionTypes.LOAD_SCENES }
}
  
export function loadScenesSuccess(data) {
    return { type: sceneActionTypes.LOAD_SCENES_SUCCESS, data }
}

export function changeSceneTitle(id, title) {
    return { type: sceneActionTypes.CHANGE_TITLE, id, title }
}

export function failure(error) {
    return { type: initiaActionTypes.FAILURE, error }
}