import React from "react";
import './collectionoverview.scss';
import CollectionPreview from "../collectionPreview/collectionPreview";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import {selectCollections} from './../../Redux/shop/shop.selector';

const CollectionOverview = ({collection}) => {
    return (
        <div className="collection-overview">
            {
                collection.map(({ id, ...otherParams }) => (

                    <CollectionPreview key={id} {...otherParams} />

                ))}

        </div>
    )
}
const mapStateToProps=createStructuredSelector({
    collection:selectCollections,
})
export default connect(mapStateToProps)(CollectionOverview);