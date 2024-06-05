import React, { Component } from "react";
import './shop.scss';
import { Route, Routes } from "react-router-dom";
import CollectionOverview from "../../components/collectionoverview/collectionoverview";
import CollectionPage from "../../components/collection/collection";
const Shop = () => {    return (
        <div className="shop">
            <Routes>
                <Route path={''} element={<CollectionOverview/>}/>
                <Route path={`/shop/:collectionId`} element={<CollectionPage/>}/>
            </Routes>
        </div>
    );
}


export default Shop;