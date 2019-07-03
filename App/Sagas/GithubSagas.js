import { call, put } from 'redux-saga/effects'
import NewActions from '../Redux/NewRedux'

export function * getUsers (api) {
  // make the call to the api
  const response = yield call(api.getUsers)
  if (response.ok) {
    // do data conversion here if needed
    yield put(NewActions.newSuccess(response.data))
  } else {
    yield put(NewActions.newSuccess())
  }
}
