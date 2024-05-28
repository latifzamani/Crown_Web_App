import CardActionType from "./card.types";

export const toggleCardHidden=()=>({
    type:CardActionType.TOGGLE_CARD_HIDDEN 
});  

export const addItem=item=>({
    type:CardActionType.ADD_ITEM,
    payload:item
});

export const removeItem=item=>({
    type:CardActionType.REMOVE_ITEM,
    payload:item
});

export const decreaseQuantity=item=>({
    type:CardActionType.DECREASE,
    payload:item,
})