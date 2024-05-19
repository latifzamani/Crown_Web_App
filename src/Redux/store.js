import { legacy_createStore as createStore, applyMiddleware} from "redux";
import logger from 'redux-logger';
import rootReducer from "./root.reducer";
const Middlewares=[logger];
const Store=createStore(rootReducer,applyMiddleware(...Middlewares));
export default Store;