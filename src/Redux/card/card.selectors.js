import { createSelector } from "reselect";

const selectCard=state =>(state.card);

export const selectCardHidden=createSelector(
    [selectCard],
    (card)=>(card.cardItems)
);
export const selectCardItems=createSelector(
    [selectCard],
    card=>(card.cardItems)
);

export const selectCardItemsCount=createSelector(
    [selectCardItems],
    cardItems=>(cardItems.reduce((accu,cardItem)=>(accu+cardItem.quantity),0))
);

export const selectCardTotal=createSelector(
    [selectCardItems],
    cardItems=>(cardItems.reduce((accu,cardItem)=>(accu+cardItem.quantity * cardItem.price),0))
);