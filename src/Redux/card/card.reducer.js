import CardActionType from './card.types'
import { addItemToCard,decreaseItemFromList } from './card.utils';
const INITIAL_STATE={
    hidden:true,
    cardItems:[],
};

const CardReducer=(state=INITIAL_STATE,action)=>{
 switch(action.type){
    case CardActionType.TOGGLE_CARD_HIDDEN :
    return {
        ...state,
        hidden:!state.hidden,

    };
    case CardActionType.ADD_ITEM:
        return{
            ...state,
             cardItems:addItemToCard(state.cardItems,action.payload)
        };

    case CardActionType.REMOVE_ITEM:
        return{
            ...state,
            cardItems:state.cardItems.filter(
                cardItem=>cardItem.id !== action.payload.id
                ),
        };

    case CardActionType.DECREASE:
        return{
            ...state,
            cardItems:decreaseItemFromList(state.cardItems,action.payload)
        };
     
    default:
        return state
 }
};
export default CardReducer;