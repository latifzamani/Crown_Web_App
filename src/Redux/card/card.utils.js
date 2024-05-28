export const addItemToCard = (cardItems, cardItemToAdd) => {
    const existingCardItem = cardItems.find(cardItem => cardItem.id === cardItemToAdd.id);

    if (existingCardItem) {
        return cardItems.map(
            (cardItem) => (cardItem.id === cardItemToAdd.id
             ? {...cardItem,quantity: cardItem.quantity + 1}
              : cardItem)
              );
    }

    return [...cardItems,{...cardItemToAdd,quantity:1}];
};

export const decreaseItemFromList=(cardItems,cardItemToDecrease)=>{
    const existingCardItem=cardItems.find(
        cardItem=>cardItem.id===cardItemToDecrease.id
    );
    if(existingCardItem.quantity===1){
        return cardItems.filter(cardItem=>cardItem.id !==cardItemToDecrease.id);
    }

    return cardItems.map(cardItem=>
        (cardItem.id===cardItemToDecrease.id) ? 
        {...cardItem,quantity:cardItem.quantity-1} :
        cardItem
        );
};

