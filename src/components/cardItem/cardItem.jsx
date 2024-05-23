import React from "react";
import './cardItem.scss';

const CardItem=({item:{imageUrl,name,price,quantity}})=>(
              <div className="card-item">
                <img src={imageUrl} alt="Item"/>
                <div className="item-details">
                    <span className="name">{name}</span>
                    <span className="price">
                        {quantity} X ${price}
                    </span>
                </div>
              </div>
);
export default CardItem;