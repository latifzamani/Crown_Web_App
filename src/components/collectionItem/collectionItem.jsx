import React from "react";
import './collectionItem.scss';
import { connect } from "react-redux";
import { addItem } from "../../Redux/card/card.actions";
import CustomButton from "../customButton/customButton";

const CollectionItem=({item,addItem})=>{
 const {id,name,price,imageUrl}=item;
return(
   <div className="collection-item" >
    <div className="image" style={{backgroundImage:`url(${imageUrl})`}}/>
       <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
        </div>    
        <CustomButton onClick={()=>addItem(item)} inverted>Add TO Card</CustomButton>
   </div>
);}
const mapDispatchToProps=dispatch=>({
   addItem:item=>dispatch(addItem(item))
})
export default connect(null,mapDispatchToProps)(CollectionItem);