import { legacy_createStore as createStore, applyMiddleware} from "redux";
import logger from 'redux-logger';
import { persistStore } from "redux-persist";
import rootReducer from "./root.reducer";
const Middlewares=[logger];
export const Store=createStore(rootReducer,applyMiddleware(...Middlewares));
export const persistor=persistStore(Store);
export default Store;