import React from "react";
import './cardDropdown.scss';
import CardItem from "../cardItem/cardItem";
import { connect, useDispatch } from "react-redux";
import CustomButton from "../customButton/customButton";
import { selectCardItems } from "../../Redux/card/card.selectors";
import { toggleCardHidden } from "../../Redux/card/card.actions";
import { UseDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const CardDropdown=({cardItems})=>{
  const dispatch=useDispatch();
  const navigate=useNavigate();
  return(
      <div className="card-dropdown">
        <div className="card-items">
          {
            cardItems.length ?
            (cardItems.map(cardItem=>(
              <CardItem key={cardItem.id} item={cardItem} />
            ))) 
            :
            (<span className="emptyCard">Your card is empty</span>)
          }
        </div>
        <CustomButton onClick={()=>{navigate('/checkout');dispatch(toggleCardHidden())}}>Item Check</CustomButton>
      </div>
);
};

const mapStateToProps=(state)=>({
  cardItems:selectCardItems(state)
})
export default connect(mapStateToProps)(CardDropdown);