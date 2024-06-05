import React from "react";
import './directory.scss';
import MenuItem from "../menu-item/menu-item";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../Redux/directory/directory.selector";
const Directory=({section})=>{
    return(
        <div className="directory-menu">
         {
            section.map(({title,imageUrl,id,size})=>{
                return(
                   <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                );
            })
         }
        </div>

    );
  };
  const mapStateToProps=createStructuredSelector({
    section:selectDirectorySections
})
export default connect(mapStateToProps)(Directory);