import { combineReducers } from "redux";
import CardReducer from './card/card.reducer';
import UserReducer from "./user/user.reducer";

export default combineReducers({
    user:UserReducer,
    card:CardReducer
    
});