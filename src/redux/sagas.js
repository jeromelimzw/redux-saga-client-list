import { call, put, takeLatest } from "redux-saga/effects";
import { ADD_RANDOM, ADD_NEW } from "./constants";
import axios from "axios";

const fetchRandomAxios = () => {
  return axios.request({
    method: "get",
    url: "https://randomuser.me/api/"
  });
};

export function* addRandomSaga() {
  try {
    let randomUser = yield call(fetchRandomAxios);
    let { first, last } = randomUser.data.results[0].name;
    let { phone } = randomUser.data.results[0];
    const payload = { firstName: first, lastName: last, telNo: phone };
    yield put({ type: ADD_NEW, payload });
  } catch (err) {
    throw new Error(err);
  }
}

export function* watchEditDetail() {
  yield takeLatest(ADD_RANDOM, addRandomSaga);
}
