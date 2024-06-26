import { createSelector } from "reselect";

const shopSelect=(state)=>state.shop;

export const  selectCollections=createSelector(
    [shopSelect],
    shop=>shop.collections
)