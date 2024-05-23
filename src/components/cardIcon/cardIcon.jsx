import React from "react";
import './cardIcon.scss';

import {ReactComponent as Logo} from '../../assets/shopping-bag.svg';
import { connect } from "react-redux";
import { toggleCardHidden } from "../../Redux/card/card.actions";

const CardIcon=({toggleCardHidden})=>(
    <div className="card-icon"onClick={toggleCardHidden}>
        <span>|SHOPS</span>
     <div  >
        <Logo className="shopping-icon"/>
        <span className="item-counter">0</span>
     </div>
     </div>
);
const mapDispatchToProps=dispatch=>({
    toggleCardHidden:()=>dispatch(toggleCardHidden())
});
export default connect(null,mapDispatchToProps)(CardIcon);