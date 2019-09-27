import increaseOrDecrease from "../reducers/counter.js";
import { createStore } from "redux";

let store = createStore(increaseOrDecrease);

export default store;
