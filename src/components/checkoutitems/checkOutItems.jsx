import React from "react";

import './checkOutItems.scss';
import { removeItem } from "../../Redux/card/card.actions";
import { connect, useDispatch } from "react-redux";
import { addItem,decreaseQuantity } from "../../Redux/card/card.actions";

const CheckOutItems=({cardItem,RemoveItem,addItem,decreaseQuantity})=>{
  const {name,imageUrl,price,quantity}=cardItem;
  const dispatch=useDispatch();
    return(
         <div className="checkout-item">
              <div className="image-container">
                <img src={imageUrl}/>
              </div>
              <span className="name">{name}</span>
              <span className="quantity">
                <div className="arrow" onClick={()=>decreaseQuantity(cardItem)} >&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={()=>addItem(cardItem)}>&#10095;</div>
              </span>
              <span className="price">{price}</span>
              <div className="remove-button" onClick={()=>(RemoveItem(cardItem))}>&#10005;</div>
         </div>
    )
}
const mapDispatchToProps=dispatch=>({
    RemoveItem:item=>dispatch(removeItem(item)),
    decreaseQuantity:item=>dispatch(decreaseQuantity(item)),
    addItem:item=>dispatch(addItem(item)),
})
export default connect(null,mapDispatchToProps)(CheckOutItems);