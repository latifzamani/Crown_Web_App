import shopData from "./shopData";

const INITIAL_STATE={
    collections:shopData,
}

const ShopReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        default:
            return state;
            
    }
}

export default ShopReducer;