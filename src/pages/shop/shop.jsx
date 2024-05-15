import React, { Component } from "react";
import './shop.scss';
import shopData from './shopData'
import CollectionPreview from "../../components/collectionPreview/collectionPreview";

class Shop extends React.Component{
    constructor(){
        super();
        this.state={
            collection:shopData,
        }
    }

    render(){
        const {collection} =this.state;
        return(
            <div className="shop">
                {
                    collection.map(({id,...otherParams})=>(
                        
                        <CollectionPreview key={id} {...otherParams}/>
                    ))
                }
                
            </div>
        )
    }
};
export default Shop;