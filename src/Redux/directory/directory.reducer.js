
 const INITIAL_STATE={
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

const DirectoryReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        default:
            return state;
    }
}

export default DirectoryReducer;