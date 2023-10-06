import { useState, useEffect } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';


import getData from './service/ApiService';

import Navbar from './components/navbar/Navbar';
import Shop from './pages/shop/shop';
import Cart from './pages/cart/cart';
import ItemDetails from './pages/item/itemDetails';


function App(){
  
  const [items, setItems] = useState<[]>([]);

 useEffect(() => {
 
  async function fetchData() {
    var data = await getData();
    setItems(data);
  }
  fetchData();
    
},[]);
 
  var navItems = ['Shop',"Cart"]
  return <div>
    <Navbar items={navItems} title='PunkApi'></Navbar>
    <Router>
      <Routes>
        <Route path="/" element={<Shop items={items}/>}/>
        <Route path='/cart' element={<Cart/>}/>
        {/* <Route path='/item-details' element={<ItemDetails item={itemById}/>}/> */}
      </Routes>
    </Router>
   
  </div>
}

export default App;
