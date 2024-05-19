import React from 'react';
import HomePage from '../src/pages/homePage';
import { Route,Routes, useParams, Link} from 'react-router-dom';
import './App.css';
import Shop from './pages/shop/shop'; 
import Header from './components/header/header';
import Sign from './pages/sign/sign';
import { auth,createUserProfileDocument } from './firebase/firebase.utils';
class App extends React.Component{
  constructor(){
    super();
    this.state={
      currentUser:'',
    }
  }
  unsubscribeFromAuth=null;
  componentDidMount(){
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef=await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot=>{
          this.setState({
            currentUser:{
              id:snapShot.id,
              ...snapShot.data(),
            }
          },
          // ()=>{

            // }
            )
            console.log(this.state);
        })
      }else{
        this.setState({currentUser:userAuth});
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
      <Header currentUser={this.state.currentUser}/>
       <Routes>
       <Route  path='/' element={<HomePage/>}/>
       <Route  path='/shop' element={<Shop/>}/>
       <Route path='/sign' element={<Sign/>}/>
       </Routes>

    </div>
  );};
}

export default App;
