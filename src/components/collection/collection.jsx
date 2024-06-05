import React from "react";
import CollectionItem from "../collectionItem/collectionItem";
import './collection.scss';

const CollectionPage=({collections})=>{
    // const {title,items}=collection;
    console.log(collections);
    return(
        <div>
            Collection Page
            {/* <h1>{title}</h1> */}
        </div>
    )
}

export default CollectionPage;