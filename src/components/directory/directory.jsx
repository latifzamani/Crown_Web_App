import React from "react";
import './directory.scss';
import MenuItem from "../menu-item/menu-item";

class Directory extends React.Component{
    constructor(){
        super();
        this.state={
            section:[
                {
                    title:'HATE',
                    imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
                    id:1
                },
                {
                    title:'Sneakers',
                    imageUrl:'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
                    id:2
                },
                {
                    title:'Jackets',
                    imageUrl:'https://i.ibb.co/XzcwL5s/black-shearling.png',
                    id:3
                },
                {
                    title:'Women',
                    imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
                    id:4,
                    size:'large'
                },
                {
                    title:'MEN',
                    imageUrl:'https://i.ibb.co/xJS0T3Y/camo-vest.png',
                    id:5,
                    size:'large'
                },
            ]
        }
    }
  render(){
    return(
        <div className="directory-menu">
         {
            this.state.section.map(({title,imageUrl,id,size})=>{
                return(
                   <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                );
            })
         }
        </div>

    );
  }
};
export default Directory;