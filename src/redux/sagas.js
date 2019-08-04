import { put, takeLatest } from "redux-saga/effects";
import { EDIT_DETAILS } from "./constants";
const delay = ms => new Promise(res => setTimeout(res, ms));

export function* EditDetailSaga() {
  //   yield delay(0);
  console.log("hello sagas");
}

export function* watchEditDetail() {
  console.log("watchEditDetails");
  yield takeLatest(EDIT_DETAILS, EditDetailSaga);
}
