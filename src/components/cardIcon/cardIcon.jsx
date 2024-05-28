import React from "react";
import './cardIcon.scss';

import {ReactComponent as Logo} from '../../assets/shopping-bag.svg';
import { connect } from "react-redux";
import { toggleCardHidden } from "../../Redux/card/card.actions";
import { selectCardItemsCount } from "../../Redux/card/card.selectors";

const CardIcon=({toggleCardHidden,itemCount})=>(
    <div className="card-icon"onClick={toggleCardHidden}>
        <span>|SHOPS</span>
     <div  >
        <Logo className="shopping-icon"/>
        <span className="item-counter">{itemCount}</span>
     </div>
     </div>
);
const mapDispatchToProps=dispatch=>({
    toggleCardHidden:()=>dispatch(toggleCardHidden())
});

const mapStateToProps=(state)=>({
    itemCount:selectCardItemsCount(state)
});
export default connect(mapStateToProps,mapDispatchToProps)(CardIcon);