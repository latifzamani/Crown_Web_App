import React from "react";
import './checkout.scss';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCardItems, selectCardTotal } from "../../Redux/card/card.selectors";
import CheckOutItems from "../../components/checkoutitems/checkOutItems";

const CheckOut = ({ cardItems, total }) => (
    <div className="checkOut-page">
        <div className="checkOut-header">
            <div className="checkOut-block">
                <span>Product</span>
            </div>
            <div className="checkOut-block">
                <span>Description</span>
            </div>
            <div className="checkOut-block">
                <span>Quantity</span>
            </div>
            <div className="checkOut-block">
                <span>Price</span>
            </div>
            <div className="checkOut-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cardItems.map(cardItem=>(
                <CheckOutItems key={cardItem.id} cardItem={cardItem}/>
            ))
        }
        <div className="total">
            <span>Total: $ {total}</span>
        </div>
    </div>
);
const mapStateToProps =(state)=>({
    cardItems: selectCardItems(state),
    total: selectCardTotal(state)
})

export default connect(mapStateToProps)(CheckOut);