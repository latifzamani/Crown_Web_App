import React from "react";
import './cardDropdown.scss';
import CardItem from "../cardItem/cardItem";
import { connect } from "react-redux";
import CustomButton from "../customButton/customButton";

const CardDropdown=({cardItems})=>(
      <div className="card-dropdown">
        <div className="card-items">
          {
            cardItems.map(cardItem=>(
              <CardItem key={cardItem.id} item={cardItem} />
            ))
          }
        </div>
        <CustomButton>Item Check</CustomButton>
      </div>
);

const mapStateToProps=({card:{cardItems}})=>({
  cardItems
})
export default connect(mapStateToProps)(CardDropdown);