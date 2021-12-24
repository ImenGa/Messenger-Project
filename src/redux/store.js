import messagesReducer from "./reducers";
import { createStore } from "redux";

let store = createStore(messagesReducer);

export default store;
