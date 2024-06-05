import { combineReducers } from "redux";
import CardReducer from './card/card.reducer';
import UserReducer from "./user/user.reducer";
import DirectoryReducer from "./directory/directory.reducer";
import ShopReducer from "./shop/shop.reducer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig={
    key:'root',
    storage,
    whitelist:['card']
};

const rootReducer=combineReducers({
    user:UserReducer,
    card:CardReducer,
    Directory:DirectoryReducer,
    shop:ShopReducer,
    
});

export default persistReducer(persistConfig,rootReducer)