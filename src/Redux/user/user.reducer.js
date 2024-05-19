const INITAIL_STATE={
    currentUser:null,
}
const UserReducer=(state=INITAIL_STATE,action)=>{

    switch(action.type){
        case 'SET_CURRENT_USER':
            return{
                ...state,
                currentUser:action.payLoad
            }

        default :
            return state;
        };
    }
    export default UserReducer;