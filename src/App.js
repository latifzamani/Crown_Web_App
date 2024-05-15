import React from 'react';
import HomePage from '../src/pages/homePage';
import { Route,Routes, useParams, Link} from 'react-router-dom';
import './App.css';
import Shop from './pages/shop/shop';
import Header from './components/header/header';
import Sign from './pages/sign/sign';
function App() {
  return (
    <div className="App">
      <Header/>
       {/* <HomePage /> */}
       {/* <Link to="/hats/:12"><h1>HatPage</h1></Link> */}
       <Routes>
       <Route  path='/' element={<HomePage/>}/>
       <Route  path='/shop' element={<Shop/>}/>
       <Route path='/sign' element={<Sign/>}/>
       </Routes>

    </div>
  );
}

export default App;
