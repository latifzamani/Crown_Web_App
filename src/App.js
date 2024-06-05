import React from 'react';
import HomePage from '../src/pages/homePage';
import CheckOut from './pages/checkout/checkout';
import { Route,Routes, useParams, Link,Navigate} from 'react-router-dom';
import './App.css';
import Shop from './pages/shop/shop'; 
import Header from './components/header/header';
import Sign from './pages/sign/sign';
import { auth,createUserProfileDocument } from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {SetCurrentUser} from './Redux/user/user.actions';
import CollectionPage from './components/collection/collection';
class App extends React.Component{
  constructor(){
    super();
    this.state={
      currentUser:'',
    }
  }
  unsubscribeFromAuth=null;
  componentDidMount(){
    const {SetCurrentUser}=this.props;
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef=await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot=>{
          SetCurrentUser({
              id:snapShot.id,
              ...snapShot.data(),
          },
          // ()=>{

            // }
            )
            // console.log(this.state);
        })
      }else{
        this.setState(userAuth);
      }
      });
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
 
  componentWillUnmount(){
    // this.unsubscribeFromAuth();
  }
   render(){
  return (
    <div className="App">
      <Header/>
       <Routes>
       <Route  path='/' element={<HomePage/>}/>
       <Route  path='/shop' element={<Shop/>}/>
       <Route  path='/shop/:category' element={<CollectionPage/>}/>
       <Route  path='/sign' element={(this.props.currentUser) ? (<Navigate  to='/' replace/>) : (<Sign/>) }/>
       <Route path='/checkout' element={<CheckOut/>} />
       </Routes>

    </div>
  );};
};

const mapStateToProps=({user})=>({
  currentUser:user.currentUser
});

const mapDispatchToProps=(dispatch)=>({
    SetCurrentUser:user=>dispatch(SetCurrentUser(user))
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
